const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema({
    Fullname:String,
    Address:String,
    Phone: String,
    ProductName: String,
    Customer: String,
    Quantity: Number,
    Total: Number,
    Status: String,
    PaymentMethod: String,
    Message: String,
    Date: String

})


module.exports = mongoose.model('Order', Order)