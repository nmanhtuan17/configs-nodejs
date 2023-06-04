const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
    name: String,
    description: String,
    image: String
})

const courseMd = mongoose.model('Course', Course)


module.exports = courseMd