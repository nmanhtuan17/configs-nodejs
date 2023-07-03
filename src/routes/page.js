import express from "express";
import pageCtrl from '../controler/pageCtrl'
import loginCtrl from '../controler/loginCtrl'
const router = express.Router()



router.get('/cart', pageCtrl.getCart)
router.delete('/cart/:id', pageCtrl.deleteProductFromCart)
router.put('/cart/:id', pageCtrl.putUpdateQtyCart)
router.get('/checkout', pageCtrl.getCheckout)
router.post('/checkout', pageCtrl.postCheckout)
router.get('/:id', pageCtrl.getSingleProduct)










module.exports = router