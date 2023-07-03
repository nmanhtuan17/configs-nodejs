import { productModel } from "../models/products"
import cartModel from '../models/cart'
import orderModel from '../models/orders'

// get /page/:id
let getSingleProduct = async (req, res) => {
    var product = await productModel.findById({ _id: req.params.id })
    var countCart = []
    if (req.isAuthenticated()) {
        let userLogin = req.user
        countCart = await cartModel.find({ Username: userLogin.Username })
    }
    res.render('single-product.ejs', {
        title: 'Details',
        isLogin: req.isAuthenticated(),
        product: product,
        user: req.user,
        countCart: countCart.length
    })
}


// GET /page/cart
let getCart = async (req, res) => {
    var carts = []
    var total = 0
    if (req.isAuthenticated()) {
        let userLogin = req.user
        carts = await cartModel.find({ Username: userLogin.Username })
        carts.forEach((el) => {
            total += parseFloat(el.Price) * el.Quantity
        })
        res.render('cart.ejs', {
            title: 'Cart',
            isLogin: req.isAuthenticated(),
            user: req.user,
            countCart: carts.length,
            carts: carts,
            total: total.toFixed(6)
        })
    } else {
        res.redirect('/user/login')
    }

}
// DELETE /page/cart/:id
let deleteProductFromCart = async (req, res) => {
    await cartModel.findByIdAndDelete({ _id: req.params.id })
    res.redirect('/page/cart')
}

// PUT /page/cart/:id
let putUpdateQtyCart = async (req, res) => {
    let cartProduct = await cartModel.findById({ _id: req.params.id })
    cartProduct.Quantity = req.body.quantity
    await cartProduct.save()
    res.redirect('/page/cart')
}


//get /page/checkout
let getCheckout = async (req, res) => {
    var orders = []
    var total = 0
    if (req.isAuthenticated()) {
        let userLogin = req.user
        orders = await cartModel.find({ Username: userLogin.Username })
        orders.forEach((el) => {
            total += parseFloat(el.Price) * el.Quantity
        })
    }
    res.render('checkout.ejs',
        {
            title: 'Product Checkout',
            isLogin: req.isAuthenticated(),
            user: req.user,
            countCart: orders.length,
            orders: orders,
            total: total.toFixed(6),
            message: req.flash('msg'),
            err: req.flash('err')
        })

}

//post /page/checkout
let postCheckout = async (req, res) => {

    var d = new Date()
    var time = `${d.getDay()}-${d.getMonth()}-${d.getFullYear()}`

    var isSuccess = -1
    var orderFalse
    var qty
    if (req.isAuthenticated()) {
        var userLogin = req.user
        var productCheckout = await cartModel.find({ Username: userLogin.Username })
    }
    var data = req.body
    for (let i = 0; i < productCheckout.length; i++) {
        if (productCheckout[i].Quantity > 0) {
            let productInStore = await productModel.findOne({ ProductName: productCheckout[i].ProductName })
            if (productInStore.Quantity >= productCheckout[i].Quantity) {
                productInStore.Quantity -= productCheckout[i].Quantity
                let total = parseFloat(productCheckout[i].Price) * productCheckout[i].Quantity
                var newOrder = new orderModel({
                    Fullname: data.fullname,
                    Address: data.address,
                    Phone: data.phone,
                    ProductName: productCheckout[i].ProductName,
                    Customer: userLogin.Username,
                    Quantity: productCheckout[i].Quantity,
                    Total: total,
                    Status: 'Chờ xác nhận',
                    PaymentMethod: 'Thanh toán khi nhận hàng',
                    Message: data.message,
                    Date: time
                })
                isSuccess = 1
                await newOrder.save()
                await productInStore.save()
            }
            else {
                isSuccess = 0
                orderFalse = productCheckout[i].ProductName
                qty = productInStore.Quantity
            }

        }
    }

    if (isSuccess) {
        req.flash('msg', 'Đặt hàng thành công')
        await cartModel.deleteMany({ Username: userLogin.Username })
    } else if(isSuccess == -1) {
        req.flash('err', 'Đặt hàng không thành công')
    } else{
        req.flash('err', `Xin lỗi!! ${orderFalse} còn ${qty} sản phẩm trong kho hàng`)
    }

    res.redirect('/page/checkout')
}


module.exports = {
    getSingleProduct,
    getCart,
    getCheckout,
    deleteProductFromCart,
    postCheckout,
    putUpdateQtyCart

}