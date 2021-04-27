const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.send("BUUUUUU");
})

router.post('/signup',(req,res)=>{
    const {name,email,password}=req.body;
    if(!email || !password ||!name){
        return res.status(422).json({error:"please fill all the fields"})
    }
    res.json({message:"yayyy"})
})

module.exports=router