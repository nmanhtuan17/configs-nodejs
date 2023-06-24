import { productModel } from "../models/products"
import cartModel from '../models/cart'


// get /page/:id
let getSingleProduct = async (req, res) => {
    var product = await productModel.findById({ _id: req.params.id })
    var countCart = []
    if (req.isAuthenticated()) {
        let userLogin = req.user
        countCart = await cartModel.find({ Username: userLogin.Username })
    }
    res.render('single-product.ejs', {
        title: 'Details',
        isLogin: req.isAuthenticated(),
        product: product,
        user: req.user,
        countCart: countCart.length
    })
}


// GET /page/cart
let getCart = async (req, res) => {
    var orders = []
    var total = 0
    if (req.isAuthenticated()) {
        let userLogin = req.user
        orders = await cartModel.find({ Username: userLogin.Username })
        orders.forEach((el) => {
            total += parseFloat(el.Price) * el.Quantity
        })
        res.render('cart.ejs', {
            title: 'Cart',
            isLogin: req.isAuthenticated(),
            user: req.user,
            countCart: orders.length,
            products: orders,
            total: total.toFixed(6)
        })
    } else {
        res.redirect('/user/login')
    }

}

//get /page/
let getCheckout = async (req, res) => {
    var orders = []
    var total = 0
    if (req.isAuthenticated()) {
        let userLogin = req.user
        orders = await cartModel.find({ Username: userLogin.Username })
        orders.forEach((el) => {
            total += parseFloat(el.Price) * el.Quantity
        })
    }
    res.render('checkout.ejs',
        {
            title: 'Product Checkout',
            isLogin: req.isAuthenticated(),
            user: req.user,
            countCart: orders.length,
            orders: orders,
            total: total.toFixed(6)
        })
}


// DELETE /page/cart/:id
let deleteProductFromCart = async (req, res) => {
    await cartModel.findByIdAndDelete({ _id: req.params.id })
    res.redirect('/page/cart')
}
module.exports = {
    getSingleProduct,
    getCart,
    getCheckout,
    deleteProductFromCart

}