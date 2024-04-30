import express from 'express';
import url from 'url';//step 2 import url module for taking data

const app = express()//archit batham


import homerouter from './router/home.router.js';
app.use("/",homerouter);

app.set("view engine", "ejs");
app.set("views", "./views");

var urlRoute = "<h2> Click on link to redirect</h2> <a href = '/'>Home page</a><br/><br/> <a href = '/about'>About page</a><br/><br/> <a href = '/contact'>Contact page</a><br/><br/> <a href = '/service'>Service page</a><br/><br/> <a href = '/register'>Register page</a><br/><br/> <a href = '/login'>Login page</a><br/><br/> "

app.get("/",(req,res)=>{
    res.send("<h1>/ or /home Url iiinssvoked </h1>" + urlRoute)
});

app.listen(3000);
console.log("Server invoked at link---> http://localhost:3000");
