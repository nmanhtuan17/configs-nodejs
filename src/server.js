const express = require('express')
const methodOverride = require('method-override')
import configViewEngine from './configs/viewEngine'
import initWebRoute from './routes/web'
import db from './configs/db'
import cookieParser from 'cookie-parser'
import connectFlash from 'connect-flash'
import session from 'express-session'
import passport from 'passport'


require('dotenv').config()

const app = express()

// kết nối database
db.connect()

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(methodOverride('_method'))

// use cookie parser
app.use(cookieParser('secret'))
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 *24 // 86400000 1 day 
    }
}))

app.use(connectFlash())
//config passport middleware
app.use(passport.initialize())
app.use(passport.session())




const port = process.env.PORT || 8080

//set up view engine
configViewEngine(app)

//init web routes
initWebRoute(app)

app.listen(port,()=>{
    console.log(`Example app listeningap at http://localhost:${port}`)
})
