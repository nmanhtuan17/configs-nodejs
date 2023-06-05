const express = require('express');
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
const Post = require('../models/courseDb')
// [GET] /
let index = async (req, res)=>{
    const posts = await Post.find({})
    res.render('post/about.ejs', {title: 'post', posts})
}

// [GET] /create
let create =  (req, res)=>{
    
    res.render('post/create.ejs', {title: 'create'})
}

// POST /
let showNewPost = (req, res) => {
    const data = req.body
    const newPost = new Post({name: data.name, image: data.image, description: data.description})
    newPost.save()
    res.redirect('/post')
}

//GET /edit
let editPost = async (req, res) => {
    const posts = await Post.find({})
    res.render('post/editPost.ejs', {title: 'Edit', posts, stt: 0})
}

//GET /edit/id
let editItem = async (req, res) => {
    const post= await Post.findById(req.params.id)

    res.render('post/editItem.ejs', {title: 'Edit', post})
}


//PUT /post/:id
let update = async (req, res) => {
    
    let doc = await Post.findById(req.params.id)
    doc.name = req.body.name
    doc.image = req.body.image
    doc.description = req.body.description
    await doc.save()
    res.redirect('/post/edit')
}

// DELETE /post/:id
let destroy = async (req, res) => {
    await Post.deleteOne({_id: req.params.id})
    res.redirect('/post/edit')
}




module.exports = {
    index,
    create,
    showNewPost,
    editPost,
    editItem,
    update,
    destroy
}