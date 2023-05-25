
// [GET] /
let index = (req, res)=>{
    res.render('home.ejs')
}

module.exports = {
    index
}