const express = require('express')
import aboutCtrl from '../controler/aboutCtrl'
let router = express.Router()



router.use('/', aboutCtrl.index)

module.exports = router