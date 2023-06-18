const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Cart = new Schema({
    ProductName: String,
    Username: String,
    Quantity: Number,
    
})


module.exports = mongoose.model('Cart', Cart)