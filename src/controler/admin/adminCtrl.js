import { productModel } from "../../models/products";
import { userModel } from "../../models/products";
import orderModel from '../../models/orders'


// get /admin/
let getAdmin = async (req, res)=> {
    let allOrders = await orderModel.find({})
    var total = 0
    let allUsers = await userModel.find({})
    allOrders.forEach((el)=>{
        total += el.Total
    })
    res.render('admin/adminPage',
    {
        title: 'Admin',
        isLogin: req.isAuthenticated(),
        user: req.user,
        orders: allOrders,
        total: total,
        allUsers: allUsers
    })
}
// Get /admin/products
let getAdminProduct = async (req, res) => {
    var allProduct = await productModel.find({})
    var stt = 1
    res.render('admin/adminProduct', {
        title: 'Product',
        isLogin: req.isAuthenticated(),
        user: req.user,
        products: allProduct,
        stt: stt,
    })
}

//delete /admin/delete/:id

let postDeleteProduct = async (req, res) => {
    await productModel.deleteOne({_id: req.params.id})
    res.redirect('/admin/products')
}

//get /admin/create

let getCreate = (req, res) => 
{

    res.render('admin/adminCreate.ejs', {
        title: 'Thêm sản phẩm',
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
        title: 'Cập nhật sản phẩm',
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
    res.redirect('/admin/products')
}


// get /admin/customer
let getCustomer = async (req, res) => {
    let allUsers = await userModel.find({})
    var stt = 1
    res.render('admin/adminCustomer', {
        title: 'QL người dùng',
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
    
    var orders = await orderModel.find({})
    var stt = 1
    res.render('admin/adminOrders', {
        title: 'Đơn hàng',
        isLogin: req.isAuthenticated(),
        user: req.user,
        orders: orders,
        stt: stt,
    })
}
module.exports = {
    getAdmin,
    getAdminProduct,
    postDeleteProduct,
    getCreate,
    postCreate,
    getUpdateProduct,
    putUpdateProduct,
    getCustomer,
    deleteCustomer,
    getOrders
}