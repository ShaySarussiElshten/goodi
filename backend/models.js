const mongoose = require('mongoose');

const diceThrowSchema = new mongoose.Schema({
    throws: [Number]
});

const userTreeSchema = new mongoose.Schema({
    userId: String,
    tree: {},
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: { type: Date, default: Date.now }
});

const userSchema = new mongoose.Schema({
    userId: String,
    trees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserTree'
    }],
    // ... other fields ...
});


userTreeSchema.statics.generateTree = function(throws) {
    let tree = {};
    let current = tree;
    throws.forEach((throwResult, index) => {
        current.value = throwResult;
        current.next = index < throws.length - 1 ? {} : null;
        current = current.next;
    });
    return tree;
};

const User = mongoose.model('User', userSchema);
const DiceThrow = mongoose.model('DiceThrow', diceThrowSchema);
const UserTree = mongoose.model('UserTree', userTreeSchema);

module.exports = { DiceThrow, UserTree,User };