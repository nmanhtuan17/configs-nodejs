import cartModel from '../models/cart'
import { userModel } from '../models/products'
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
        message: req.flash('msg'),
    })
}

let putUpdateProfile = async (req, res) => {
    let fullname = req.body.fullname
    let email = req.body.email
    let password = req.body.password
    let password2 = req.body.newpassword
    if (req.isAuthenticated()) {
        let userLogin = req.user
        var user = await userModel.findById({_id: userLogin._id})
       if(password == user.Password){
            user.Fullname = fullname
            user.Email = email
            if(password2 != ''){
                user.Password = password2
            }
            await user.save()
            req.flash('msg', 'Cập nhật thành công');
            res.redirect('/user/detail')
        }else{
            req.flash('msg', 'Mật khẩu sai');
            res.redirect('/user/detail')
        }
        
    }else{

        res.redirect('/user/login')
    }
}


module.exports = {
    getAccount,
    putUpdateProfile
}