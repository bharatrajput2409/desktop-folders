const express = require("express");
const route = express.Router();
const Blogs = require("../models/blogSchema");

route.get("/", async (req, res) => {
	try {
		let blogs = await Blogs.find();
		res.json(blogs);
	} catch (err) {
		res.send("error" + err);
	}
});
route.get("/:id", async (req, res) => {
	try {
		let blog = await Blogs.findById(req.params.id);
		res.json(blog);
	} catch (err) {
		res.send("error" + err);
	}
});
route.post('/', async (req,res)=>{
    const blog = new blogs({
        heading:req.body.heading,
        content:req.body.content,
        date:req.body.date
    });
    try{
        let newblog = await Blog.save();
        res.send(newblog);
    }catch(err){
        res.send('error '+err)
    }
})

module.exports = route;
