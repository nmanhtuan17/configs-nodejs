const express = require('express')
import configViewEngine from './configs/viewEngine'
import initWebRoute from './routes/web'
import db from './configs/db'
require('dotenv').config()

const app = express()

// kết nối database
db.connect()

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

const port = process.env.PORT || 8080

//set up view engine
configViewEngine(app)

//init web routes
initWebRoute(app)

app.listen(port,()=>{
    console.log(`Example app listeningap at http://localhost:${port}`)
})
