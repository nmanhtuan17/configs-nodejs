import { productModel } from "../models/products"
import cartModel from '../models/cart'

// POST /
let addToCart = async (req, res) => {
    var product = await productModel.findById({_id: req.params.id})
    if(req.isAuthenticated()){
        let userLogin = req.user

        var tempCart = await cartModel.findOne({ProductName: product.ProductName, Username: userLogin.Username})
        

        if(tempCart){
            tempCart.Quantity += 1
            await tempCart.save()
            res.redirect('back')
        }
        else{
            var newAddToCart = new cartModel({
                ProductName: product.ProductName,
                Price: product.Price,
                Quantity: req.body.qty,
                Image: product.Image,
                Description: product.Description,
                Username: userLogin.Username
            })
            await newAddToCart.save()
            res.redirect('back')
        }
        
        
    }else{
        res.redirect('/user/login')
    }
    
    
}




module.exports = {
    addToCart
}