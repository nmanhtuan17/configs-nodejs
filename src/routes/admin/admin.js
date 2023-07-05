const express = require('express')
const router = express.Router()
import adminCtrl from '../../controler/admin/adminCtrl.js'
import loginCtrl from '../../controler/loginCtrl.js'

router.get('/create',loginCtrl.checkLoggedIn, adminCtrl.getCreate)
router.post('/create', adminCtrl.postCreate)

router.delete('/delete/:id', adminCtrl.postDeleteProduct) 
router.get('/update/:id',loginCtrl.checkLoggedIn, adminCtrl.getUpdateProduct)
router.put('/update/:id', adminCtrl.putUpdateProduct)

router.get('/customer',loginCtrl.checkLoggedIn, adminCtrl.getCustomer)
router.delete('/customer/:id', adminCtrl.deleteCustomer)
router.put('/customer/:id', adminCtrl.putCustomer)

router.get('/orders',loginCtrl.checkLoggedIn, adminCtrl.getOrders)
router.put('/orders/:id', adminCtrl.putOrders)


router.get('/products',loginCtrl.checkLoggedIn, adminCtrl.getAdminProduct)

router.get('/', adminCtrl.getAdmin)

module.exports = router