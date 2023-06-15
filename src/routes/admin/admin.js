const express = require('express')
const router = express.Router()
import adminCtrl from '../../controler/admin/adminCtrl.js'
import passport from 'passport'
import initPassport from '../../controler/passportLocalCtrl'

router.get('/create', adminCtrl.getCreate)
router.post('/create', adminCtrl.postCreate)

router.delete('/delete/:id', adminCtrl.postDeleteProduct) 


module.exports = router