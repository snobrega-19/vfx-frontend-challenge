# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /api

# Copy package.json to the docker image
COPY package.json .

# Install dependencies
RUN npm install

# Copy the rest of the files
COPY . .

# Expose the port the app runs on
EXPOSE 5001

# Command to run the application
CMD ["node", "server.js"]