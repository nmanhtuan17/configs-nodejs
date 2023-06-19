const express = require('express')
const router = express.Router()
import homeCtrl from '../controler/homeCtrl'
import loginCtrl from '../controler/loginCtrl'


router.get('/' ,homeCtrl.home)


module.exports = router