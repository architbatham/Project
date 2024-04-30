import express from 'express';

let router = express.Router();

router.get("/", (req,res)=>{
    res.render("home");
})
router.get("/login", (req,res)=>{
    res.render("login");
})
router.get("/contact", (req,res)=>{
    res.render("contact");
})
router.get("/about", (req,res)=>{
    res.render("about");
})


export default router