const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema({
    Address:String,
    Phone: String,
    ProductName: String,
    Username: String 
})


module.exports = mongoose.model('Order', Order)