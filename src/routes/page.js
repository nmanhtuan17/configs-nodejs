import express from "express";
import pageCtrl from '../controler/pageCtrl'
import loginCtrl from '../controler/loginCtrl'
const router = express.Router()



router.get('/cart',loginCtrl.checkLoggedIn , pageCtrl.getCart)
router.get('/:id', pageCtrl.getSingleProduct)











module.exports = router