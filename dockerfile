# Use the official Node.js image as the base image
FROM node:16-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install the required dependencies
RUN npm install

# Install qpdf in the container (Linux-based installation for Debian/Ubuntu)
RUN apt-get update && \
    apt-get install -y qpdf && \
    rm -rf /var/lib/apt/lists/*

# Copy the rest of the application files into the container
COPY . .

# Expose the port that your app will run on (adjust if different)
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
