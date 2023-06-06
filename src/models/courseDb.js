const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
    name: String,
    description: String,
    image: String
})
const Post = new Schema({
    name: String,
    description: String,
    image: String
})
const courseMd = mongoose.model('Course', Course)
const postsMd = mongoose.model('Post', Post)

module.exports = postsMd