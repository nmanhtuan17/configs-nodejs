const express = require('express')
const router = express.Router()
import adminCtrl from '../../controler/admin/adminCtrl.js'
import passport from 'passport'
import initPassport from '../../controler/passportLocalCtrl'
import loginCtrl from '../../controler/loginCtrl.js'

router.get('/create', adminCtrl.getCreate)
router.post('/create', adminCtrl.postCreate)

router.delete('/delete/:id', adminCtrl.postDeleteProduct) 
router.get('/update/:id', adminCtrl.getUpdateProduct)
router.put('/update/:id', adminCtrl.putUpdateProduct)


// router.get('/', adminCtrl.getAdminPage)
module.exports = router