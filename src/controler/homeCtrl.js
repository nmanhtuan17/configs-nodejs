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
    if(req.isAuthenticated()){
        let userLogin = req.user
        let newAddToCart = new cartModel({
            ProductName: products.ProductName,
            Username: userLogin.Username
        })
        await newAddToCart.save()
        res.redirect('/')
    }else{
        res.redirect('/user/login')
    }
    
    
}





module.exports = {
    categories,
    addToCart
}