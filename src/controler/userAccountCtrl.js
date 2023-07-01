import cartModel from '../models/cart'

// GET /user/detail
let getAccount = async (req, res) => {
    var orders = []
    if (req.isAuthenticated()) {
        let userLogin = req.user
        orders = await cartModel.find({ Username: userLogin.Username })
    }
    res.render('detailAcc.ejs', {
        title: 'Tài khoản',
        isLogin: req.isAuthenticated(),
        user: req.user,
        countCart: orders.length,
    })
}



module.exports = {
    getAccount
}