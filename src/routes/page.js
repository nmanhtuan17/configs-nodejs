import express from "express";
import pageCtrl from '../controler/pageCtrl'
import loginCtrl from '../controler/loginCtrl'
const router = express.Router()



router.get('/cart', pageCtrl.getCart)
router.get('/:id', pageCtrl.getSingleProduct)
router.get('/', pageCtrl.getCheckout)










module.exports = router