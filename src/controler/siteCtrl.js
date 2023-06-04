const Course = require('../models/courseDb')
// [GET] /
let index = async (req, res)=>{

    res.render('home.ejs', {title: 'Home'})
}


//GET /
let showSearch = (req, res) => {
    res.render('search.ejs', {title: 'Search'})
}

module.exports = {
    index,
    showSearch
}