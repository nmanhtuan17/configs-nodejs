// const mongoose =  require('mongoose')
import mongoose from 'mongoose';
const URL = 'mongodb+srv://tuaans-ecommerce:7XLUUCYAFgAObaNb@cluster17.p1sgmhs.mongodb.net/?retryWrites=true&w=majority'
async function connect() {
    try {
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Connect success....')
    } catch (error) {
        console.log('error')
    }
}

module.exports = {connect}
