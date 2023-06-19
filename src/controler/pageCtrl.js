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
        title: 'Single Product',
        isLogin: req.isAuthenticated(),
        product: product,
        user: req.user,
        countCart: countCart.length
    })
}



module.exports = {
    getSingleProduct
}