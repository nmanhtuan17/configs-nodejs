const express = require('express')
import siteRoutes from './site'
import aboutRoutes from './about'


const initWebRoute = (app) => {


    app.use('/about', aboutRoutes)

    app.use('/', siteRoutes)
}

export default initWebRoute