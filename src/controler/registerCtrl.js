
import { userModel } from '../models/products'

//GET /register

let register = (req, res) => {
    res.render('register', { title: 'Register', message: req.flash('msg') })
}


//POST /register

let createUser = async (req, res) => {
    let name = req.body.fullname;
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    let password2 = req.body.confirmtionPassword;
    
    if (password != password2) {
        req.flash('msg', 'Mật khẩu xác nhận không khớp');
        res.redirect('/user/register');

    }
    else {
        var user = await userModel.findOne({Username: username})
        if(user){
            req.flash('msg', 'Tên người dùng đã tồn tại')
            res.redirect('/user/register')
        }
        else{
            let newUser = new userModel({
                Fullname: name,
                Email: email,
                Username: username,
                Password: password,
                Admin: 0
            })
            await newUser.save()
            req.flash('msg', 'Đăng kí thành công!!!')
            res.redirect('/user/login')
        }
    }
}
module.exports = {
    register,
    createUser
}