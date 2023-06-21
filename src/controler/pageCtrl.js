import { productModel } from "../models/products"
import cartModel from '../models/cart'

let getSingleProduct = async (req, res) => {
    var product = await productModel.findById({_id: req.params.id})
    var countCart = []
    if(req.isAuthenticated()){
        let userLogin = req.user
        countCart = await cartModel.find({Username: userLogin.Username})
    }
    res.render('single-product.ejs', {
        title: 'Details',
        isLogin: req.isAuthenticated(),
        product: product,
        user: req.user,
        countCart: countCart.length
    })
}

let getCart = async  (req, res) => {
    var orders = []
    if(req.isAuthenticated()){
        let userLogin = req.user
        orders = await cartModel.find({Username: userLogin.Username})
        res.render('cart.ejs', {
            title: 'Cart',
            isLogin: req.isAuthenticated(),
            user: req.user,
            countCart: orders.length,
            products: orders,
        })
    }else{
        res.redirect('/user/login')
    }
        
}



module.exports = {
    getSingleProduct,
    getCart

}