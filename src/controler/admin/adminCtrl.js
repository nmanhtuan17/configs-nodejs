import { productModel } from "../../models/products";
import { userModel } from "../../models/products";

// Get /admin/
let getAdminPage = async (req, res) => {
    let allProduct = await productModel.find({})
    var stt = 1
    res.render('admin/adminPage', {
        title: 'Admin page',
        isLogin: req.isAuthenticated(),
        user: req.user,
        products: allProduct,
        stt: stt,
    })
}

//delete /admin/delete/:id

let postDeleteProduct = async (req, res) => {
    await productModel.deleteOne({_id: req.params.id})
    res.redirect('/')
}

//get /admin/create

let getCreate = (req, res) => 
{

    res.render('admin/adminCreate.ejs', {
        title: 'Create',
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

let getUpdateProduct = async (req, res) => {
    var productUpdate = await productModel.findById({_id: req.params.id})
    res.render('admin/adminUpdate', {
        title: 'Update',
        message: req.flash('msg'),
        productUpdate: productUpdate
    })
}


let putUpdateProduct = async (req, res) => {
    var prod = await productModel.findById({_id: req.params.id})
    var data = req.body
    prod.ProductName = data.ProductName
    prod.Price = data.Price
    prod.Quantity = data.Quantity
    prod.Image = data.Image
    prod.Description = data.Description

    await prod.save()
    req.flash('msg', 'Cập nhật thành công')
    res.redirect('/admin')
}


// get /admin/customer
let getCustomer = async (req, res) => {
    let allUsers = await userModel.find({})
    var stt = 1
    res.render('admin/adminCustomer', {
        title: 'Users',
        isLogin: req.isAuthenticated(),
        user: req.user,
        allUsers: allUsers,
        stt: stt,
    })
}

let deleteCustomer = async (req, res)=> {
    await userModel.deleteOne({_id: req.params.id})
    res.redirect('/admin/customer')
}


// GET /admin/orders
let getOrders = async (req, res) => {
    let allProduct = await productModel.find({})
    var stt = 1
    res.render('admin/adminOrders', {
        title: 'Đơn hàng',
        isLogin: req.isAuthenticated(),
        user: req.user,
        products: allProduct,
        stt: stt,
    })
}
module.exports = {
    getAdminPage,
    postDeleteProduct,
    getCreate,
    postCreate,
    getUpdateProduct,
    putUpdateProduct,
    getCustomer,
    deleteCustomer,
    getOrders
}