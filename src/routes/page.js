import express from "express";
import pageCtrl from '../controler/pageCtrl'
const router = express.Router()



router.get('/:id', pageCtrl.getSingleProduct)











module.exports = router