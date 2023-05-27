const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

// model, collection name is pluralized, example below will look for collection 'blogs'
const Blog = mongoose.model('Blog', blogSchema);

// exports to be used within the project
module.exports = Blog;