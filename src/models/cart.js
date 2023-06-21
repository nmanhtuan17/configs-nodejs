const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cart = new Schema({
    ProductName: String,
    Username: String,
    Quantity: Number,
    Price: String,
    Image: String,
    Description: String

})


module.exports = mongoose.model('Cart', Cart)