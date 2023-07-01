const express = require('express')
const router = express.Router()
import adminCtrl from '../../controler/admin/adminCtrl.js'
import passport from 'passport'
import initPassport from '../../controler/passportLocalCtrl'
import loginCtrl from '../../controler/loginCtrl.js'

router.get('/create',loginCtrl.checkLoggedIn, adminCtrl.getCreate)
router.post('/create', adminCtrl.postCreate)

router.delete('/delete/:id', adminCtrl.postDeleteProduct) 
router.get('/update/:id',loginCtrl.checkLoggedIn, adminCtrl.getUpdateProduct)
router.put('/update/:id', adminCtrl.putUpdateProduct)

router.get('/customer',loginCtrl.checkLoggedIn, adminCtrl.getCustomer)
router.delete('/customer/:id', adminCtrl.deleteCustomer)
router.get('/',loginCtrl.checkLoggedIn, adminCtrl.getAdminPage)
module.exports = router