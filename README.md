# Markdown Blog Using Node.js, Express, and MongoDB

This is a Markdown blog application that utilizes Node.js, Express, and MongoDB to allow users to create, edit, and delete blog posts.

## Tutorial Credit

This project follows the 'Markdown Blog Using Node.js, Express, and MongoDB' tutorial by Web Dev Simplified on YouTube. You can find the tutorial [here](https://www.youtube.com/watch?v=1NrHkjlWVhM&t).

## Prerequisites

Ensure you have Node.js and npm installed. You will also need a MongoDB database and optionally Docker for containerization.

## MongoDB Configuration

First, set up your MongoDB credentials. Update the `server.js` file or relevant configuration file with the following (make sure to replace `<username>`, `<password>`, and `collection_name` with your own details):

```javascript
// MongoDB connection string
const mongodbConnectionString = encodeURIComponent("mongodb+srv://<username>:<password>@cluster.mongodb.net/");
const mongodbCollection = encodeURIComponent("collection_name");
const dbURI = `${mongodbConnectionString}/${mongodbCollection}?retryWrites=true&w=majority`;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })

# Install dependencies
npm install

# Start the application
npm start

# Build the Docker image
docker build -t markdown-blog .

# Run the Docker container
docker run -p 8080:8080 markdown-blog
