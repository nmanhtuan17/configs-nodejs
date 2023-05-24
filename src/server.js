
import express from 'express'
import configViewEngine from './configs/viewEngine'
require('dotenv').config()

const app = express()

const port = process.env.PORT || 8080

configViewEngine(app)

app.get('/', (rep, res) => {
   res.render('index.ejs')
})
app.get('/about', (rep, res)=>{
    res.send('routes: /about')
})
app.listen(port,()=>{
    console.log(`Example app listeningap at http://localhost:${port}`)
})