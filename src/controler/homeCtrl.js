import { productModel } from "../models/products"
import cartModel from '../models/cart'

//GET /
let categories = async (req, res) => {
    let products = await productModel.find({})
    res.render('categories.ejs', {title: 'Home', bannerText: 'Categories', products: products, isLogin: req.isAuthenticated(), user: req.user})
}


//
let addToCart = async (req, res) => {
    let products = await productModel.findById({_id: req.params.id})
    let newAddToCart = new cartModel({
        ProductName: products.ProductName,

    })
    await newAddToCart.save()
    res.redirect('/')
}





module.exports = {
    categories,
    addToCart
}