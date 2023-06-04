const express = require('express')
import siteRoutes from './site'
import postRoutes from './post'


const initWebRoute = (app) => {


    app.use('/post', postRoutes)

    
    app.use('/', siteRoutes)
}

export default initWebRoute