const express = require('express')
import aboutRoutes from './about'
import siteRoutes from './site'
let router = express.Router()

const initWebRoute = (app) => {
    
    app.use('/about', aboutRoutes)

    app.use('/', siteRoutes)
    
    
    app.get('/search', (req, res)=>{
        res.render('search.ejs')
    })

    
}

export default initWebRoute