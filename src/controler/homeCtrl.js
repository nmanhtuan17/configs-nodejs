import { productModel } from "../models/products"
import cartModel from '../models/cart'

//GET /
let home = async (req, res) => {
    let products = await productModel.find({})
    var countCart = []
    var userLogin = req.user
    if(req.isAuthenticated()){
        countCart = await cartModel.find({Username: userLogin.Username})
    }
    if(req.isAuthenticated() && userLogin.Admin){
        res.redirect('/admin/')
    }else{
        res.render('home.ejs', {title: 'Home', products: products, isLogin: req.isAuthenticated(), user: req.user, countCart: countCart.length})
    }
}
module.exports = {
    home
}