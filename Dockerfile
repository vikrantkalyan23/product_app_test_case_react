# Use a lightweight Node.js image
FROM node:19

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy application files
COPY . .

# Build the application
RUN npm run build

# Expose the desired port
EXPOSE 3000

# Serve the build using a static server
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]
