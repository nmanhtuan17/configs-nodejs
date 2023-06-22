const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema({
    Address:String,
    Phone: String,
    ProductName: String,
    Customer: String,
    Quantity: Number,
    TotalAmount: Number,
    Status: String,
    PaymentMethod: String

})


module.exports = mongoose.model('Order', Order)