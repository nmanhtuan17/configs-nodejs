const express = require('express')
const router = express.Router()
import passport from 'passport'

import loginCtrl from '../controler/loginCtrl'
import registerCtrl from '../controler/registerCtrl'
import initPassport from '../controler/passportLocalCtrl'
import homeCtrl from '../controler/homeCtrl'

initPassport()

router.get('/login', loginCtrl.checkLoggedOut, loginCtrl.getLoginPage)
router.get('/register', registerCtrl.register)




router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/user/login',
    successFlash: true,
    failureFlash: true

}))
router.post('/register', registerCtrl.createUser)
router.post('/logout', loginCtrl.postLogOut)
router.post('/cart/:id', homeCtrl.addToCart)

module.exports = router