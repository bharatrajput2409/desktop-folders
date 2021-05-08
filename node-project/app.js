const Joi = require("joi");
const express = require("express");
const app = express();

const mongoose = require("mongoose");
var url = "mongodb://localhost:27017/node-project";
const db = require('./db')
// mongoose.connect(url,{useNewUrlParser:true});
// const con = mongoose.connection ;

// con.on('open',()=>{
//     console.log('db connected...')
// })
//middleware's
app.use(express.json());
app.use('/blogs',require('./routes/blogs'))
//middleware's
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running on ${port}... `);
});
