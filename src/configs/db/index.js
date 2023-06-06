const mongoose =  require('mongoose')

const URL = 'mongodb+srv://tuwns:XtwGJpjzZIYl62u5@cluster1.4orbp6a.mongodb.net/?retryWrites=true&w=majority'
async function connect() {
    try {
        await mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('Connect success....')
    } catch (error) {
        console.log('error')
    }
}

module.exports = {connect}
