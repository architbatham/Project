import express from 'express';
import url from 'url';//step 2 import url module for taking data

const app = express()//top level function

//Step 1 now we create router

var urlRoute = "<h2> Click on link to redirect</h2> <a href = '/'>Home page</a><br/><br/> <a href = '/about'>About page</a><br/><br/> <a href = '/contact'>Contact page</a><br/><br/> <a href = '/service'>Service page</a><br/><br/> <a href = '/register'>Register page</a><br/><br/> <a href = '/login'>Login page</a><br/><br/> "

app.get("/",(req,res)=>{
    res.send("<h1>/ or /home Url invoked </h1>" + urlRoute)
});

app.get("/about",(req,res)=>{
    res.send("<h1>/about Url invoked </h1>"+ urlRoute)
});

app.get("/contact",(req,res)=>{
    res.send("<h1>/contcat Url invoked </h1>"+ urlRoute)
});

app.get("/service",(req,res)=>{
    res.send("<h1>/service Url invoked </h1>"+ urlRoute)
});

app.get("/register",(req,res)=>{
    res.send("<h1>/register Url invoked </h1>"+ urlRoute)
});
//step 3 create url 
app.get("/login",(req,res)=>{
    // var urlobj = url.parse(req.url,true).query;
    // console.log("Username = "+ urlobj.username);
    // console.log("Password = "+ urlobj.password);//extract url
    
    res.send("<h1>/login Url invoked </h1>"+ urlRoute)
});


app.listen(3000);
console.log("Server invoked at link--> http://localhost:3000");
