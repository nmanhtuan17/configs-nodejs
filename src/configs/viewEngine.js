import express from 'express'
import expressEjsLayouts from 'express-ejs-layouts'

const configViewEngine = (app) => {
    app.use(express.static('./src/public'))
    app.use(expressEjsLayouts)
    app.set("view engine", "ejs")
    app.set("views", "./src/views")
    app.set('layout', 'layouts/full-width')
}

export default configViewEngine