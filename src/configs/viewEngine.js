import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'
const path = require('path')
const configViewEngine = (app) => {
    app.use(express.static(path.join(__dirname,'../public')))
    app.use('/user',express.static(path.join(__dirname,'../public')))
    app.use('/admin',express.static(path.join(__dirname,'../public')))


    app.use(expressEjsLayouts)
    app.set("view engine", "ejs")
    app.set("views", "./src/views")
    app.set('layout', 'layouts/full-width')
}

export default configViewEngine