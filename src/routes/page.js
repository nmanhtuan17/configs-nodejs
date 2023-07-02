import express from "express";
import pageCtrl from '../controler/pageCtrl'
import loginCtrl from '../controler/loginCtrl'
const router = express.Router()



router.get('/cart', pageCtrl.getCart)
router.delete('/cart/:id', pageCtrl.deleteProductFromCart)
router.get('/checkout', pageCtrl.getCheckout)
router.get('/:id', pageCtrl.getSingleProduct)
router.post('/checkout', pageCtrl.postCheckout)










module.exports = router