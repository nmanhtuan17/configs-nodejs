import { productModel } from "../models/products"


//GET /
let categories = async (req, res) => {
    let products = await productModel.find({})
    res.render('categories.ejs', {title: 'Home', bannerText: 'Categories', products: products, isLogin: req.isAuthenticated(), user: req.user})
}





module.exports = {
    categories
}