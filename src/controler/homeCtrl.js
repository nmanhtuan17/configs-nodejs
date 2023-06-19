import { productModel } from "../models/products"
import cartModel from '../models/cart'

//GET /
let home = async (req, res) => {
    let products = await productModel.find({})
    var countCart = []
    if(req.isAuthenticated()){
        let userLogin = req.user
        countCart = await cartModel.find({Username: userLogin.Username})
    }
    
    res.render('home.ejs', {title: 'Home', products: products, isLogin: req.isAuthenticated(), user: req.user, countCart: countCart.length})
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
        res.redirect('back')
    }else{
        res.redirect('/user/login')
    }
    
    
}





module.exports = {
    home,
    addToCart
}