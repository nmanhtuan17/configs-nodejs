const express = require('express')
import postCtrl from '../controler/postCtrl'
let router = express.Router()



router.get('/create', postCtrl.create)
router.get('/edit', postCtrl.editPost)
router.get('/edit/:id', postCtrl.editItem)

router.put('/:id', postCtrl.update)

router.post('/', postCtrl.showNewPost)

router.get('/', postCtrl.index)

module.exports = router