const express = require('express')
const router = express.Router()
import homeCtrl from '../controler/homeCtrl'
import loginCtrl from '../controler/loginCtrl'


router.get('/' ,homeCtrl.categories)


module.exports = router