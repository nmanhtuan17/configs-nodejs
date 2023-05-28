
// [GET] /
let index = (req, res)=>{
    return res.render('about.ejs', {title: 'about'})
}

module.exports = {
    index
}