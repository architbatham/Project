import express from 'express';

let router = express.Router();

router.get("/", (req,res)=>{
    res.render("home");
})
router.render("/login", (req,res)=>{
    res.render("login");
})
router.render("/contact", (req,res)=>{
    res.render("contact");
})
router.render("/about", (req,res)=>{
    res.render("about");
})


export default router