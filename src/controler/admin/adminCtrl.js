import { productModel } from "../../models/products";

//delete /admin/delete/:id

let postDeleteProduct = async (req, res) => {
    await productModel.deleteOne({_id: req.params.id})
    res.redirect('/')
}

//get /admin/create

let getCreate = async (req, res) => 
{

    res.render('admin/adminCreate.ejs', {
        title: 'Create',
        bannerText: 'Thêm sản phẩm',
        isLogin: req.isAuthenticated(),
        user: req.user,
        message: req.flash('msg')
    })
}


let postCreate = async (req, res) => {
    let newProduct = new productModel({
        ProductName: req.body.ProductName,
        Price: req.body.Price,
        Quantity: req.body.Quantity,
        Image: req.body.Image,
        Description: req.body.Description
    })
    await newProduct.save()
    req.flash('msg', 'Thêm thành công')
    res.redirect('/admin/create')
}
module.exports = {
    postDeleteProduct,
    getCreate,
    postCreate
}