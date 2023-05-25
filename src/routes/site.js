const express = require('express')
import siteCtrl from '../controler/siteCtrl'
let router = express.Router()



router.use('/', siteCtrl.index)

module.exports = router