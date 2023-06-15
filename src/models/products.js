const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    Fullname:String,
    Email: String,
    Username: String,
    Password: String,
    Admin: Boolean
})

const Product = new Schema({
    ProductName: String,
    Price: Number,
    Quantity: Number,
    Description: String,
    Image: String,
})


const userModel = mongoose.model('User', User)
const productModel = mongoose.model('Product', Product)

module.exports = {
    userModel,
    productModel
}


