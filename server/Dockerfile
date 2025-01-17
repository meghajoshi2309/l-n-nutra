# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy the prisma directory
COPY prisma/ ./prisma/


# Copy the .env file
COPY .env ./

# Copy the rest of the application code
COPY . .

# Install dependencies
RUN npm install

# Build the TypeScript project
RUN npm run build

# Run Prisma migrations
RUN npx prisma migrate deploy

# Expose the port the app runs on
EXPOSE 5000

# Command to run the application
CMD ["npm", "run", "dev"]