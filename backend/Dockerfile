# Use an official Node.js runtime as parent image
FROM node:16

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json (if available) to the filesystem of the container
COPY package*.json ./

# Install the application dependencies in the Node.js container
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 for the app
EXPOSE 5000

# Define the command to start the application
CMD ["npm", "start"]