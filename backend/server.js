const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');
const { Server } = require("socket.io");
const http = require('http');
const cors = require('cors');

// Models
const { DiceThrow, UserTree, User } = require('./models');

// Express app setup
const app = express();
app.use(express.json());
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
  
  });

// Connect to MongoDB
const mongoUri = process.env.MONGO_URL || 'mongodb://db/diceApp';
mongoose.connect(mongoUri)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Connect to Redis
const redisClient = redis.createClient({ 
    url: process.env.REDIS_URL || 'redis://redis:6379' 
});
redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.connect();


// GET endpoint to retrieve all trees
app.get('/dice/trees', async (req, res) => {
    const page = parseInt(req.query.page) || 1; 
    const limit = parseInt(req.query.limit) || 10; 
    const skipIndex = (page - 1) * limit;

    try {
        const trees = await UserTree.find()
            .sort({ createdAt: -1 }) 
            .limit(limit)
            .skip(skipIndex);
        const total = await UserTree.countDocuments();

        res.json({
            page,
            limit,
            total,
            data: trees,
        });
    } catch (error) {
        res.status(500).send(error);
    }
});

app.post('/dice/throw/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
    
        let user = await User.findOne({ userId: userId });

        if (!user) {
            user = new User({ userId, trees: [] });
            await user.save();
        }

        const throws = Array.from({ length: 6 }, () => 1 + Math.floor(Math.random() * 6));
        const treeData = UserTree.generateTree(throws);

        const userTree = new UserTree({ tree: treeData, user: user._id, userId });
        await userTree.save();

        user.trees.push(userTree._id);
        await user.save();

        const userWithTrees = await User.findOne({ userId: userId }).populate('trees').exec();
        await redisClient.set(`userTrees:${userId}`, JSON.stringify(userWithTrees.trees));
        
        io.emit('treeReady', { userId ,trees: userWithTrees.trees });

        res.status(201).send({"respone": "OK"});
    } catch (err) {
        console.error(err);
        res.status(500).send('Error processing request');
    }
});

app.get('/dice/tree/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const cachedTrees = await redisClient.get(`userTrees:${userId}`);

        if (cachedTrees) {
            return res.json(JSON.parse(cachedTrees));
        } else {
            const userWithTrees = await User.findOne({ userId: userId }).populate('trees').exec();

            if (!userWithTrees) {
                return res.status(404).send('User not found');
            }

            if (userWithTrees.trees.length === 0) {
                return res.status(404).send('No trees found for this user');
            }

            res.json(userWithTrees.trees);
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error retrieving trees');
    }
});


const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});