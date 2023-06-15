import passport from 'passport'
import passportLocal from 'passport-local'
import { userModel } from '../models/products'
let LocalStrategy = passportLocal.Strategy


let initPassport = () => {
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        passReqToCallback: true
    }, async (req, username, password, done) => {
        try {
            let user = await userModel.find({Username: username})
            if(user.length == 0){
                return done(null, false, req.flash('msg', 'Tài khoản k tồn tại'))
            }
            else {
                user.forEach((data) => {
                    if(password == data.Password){
                        return done(null, data, null)
                    }
                    else{
                        return done(null, false, req.flash('msg', 'Sai mật khẩu'))
                    }
                })
            }
        } catch (err) {
            return done(null, false, err)
        }
    }))
}


passport.serializeUser((user, done) => {
    done(null, user._id)
})

passport.deserializeUser( async (id, done) => {
    let USER = await userModel.findById({_id: id})
    done(null, USER)
})


module.exports = initPassport