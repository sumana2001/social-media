const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const User=mongoose.model("User");

router.get('/',(req,res)=>{
    res.send("BUUUUUU");
})

router.post('/signup',(req,res)=>{
    const {name,email,password}=req.body;
    if(!email || !password ||!name){
        return res.status(422).json({error:"please fill all the fields"})
    }
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"user already exists"})
        }
        const user= new User({
            email,
            password,
            name
        })

        user.save()
        .then(user=>(
            res.json({message:"Saved successfully"})
        ))
        .catch(err=>{
            console.log(err);
        })
    })
    .catch(err=>{
        console.log(err);
    })
})

module.exports=router