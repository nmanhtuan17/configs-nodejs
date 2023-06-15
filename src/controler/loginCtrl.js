import { userModel } from "../models/products"
// GET /login
let getLoginPage = (req, res) => {

    res.render('login.ejs', { title: 'Account', bannerText: 'Login', message: req.flash('msg')})
}


let checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.redirect("/user/login");
    }
    next();
};

let checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.redirect("/");
    }
    next();
};

let postLogOut = (req, res) => {
    req.session.destroy(function(err) {
        res.redirect("/");
    });
};



module.exports = {
    getLoginPage,
    checkLoggedIn,
    checkLoggedOut,
    postLogOut
}