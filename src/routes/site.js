const express = require('express')
import { index, showSearch } from '../controler/siteCtrl'
let router = express.Router()



//search
router.get('/search', showSearch)

//home
router.get('/', index)


module.exports = router