# The official Node.js image
FROM node:23

# Working directory
WORKDIR /app
COPY package*.json ./

# Install np dependencies
RUN npm install
COPY . .

# Expose port 3000 to allow external access to the application
EXPOSE 3000

# Command to start the application
CMD ["node", "server.js"]
