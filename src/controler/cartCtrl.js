import { productModel } from "../models/products"
import cartModel from '../models/cart'

// POST /
let addToCart = async (req, res) => {
    let product = await productModel.findById({_id: req.params.id})
    if(req.isAuthenticated()){
        let userLogin = req.user
        let newAddToCart = new cartModel({
            ProductName: product.ProductName,
            Price: product.Price,
            //Quantity: product.Quantity,
            Image: product.Image,
            Description: product.Description,
            Username: userLogin.Username
        })
        await newAddToCart.save()
        res.redirect('back')
    }else{
        res.redirect('/user/login')
    }
    
    
}




module.exports = {
    addToCart
}