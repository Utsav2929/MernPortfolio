
// const cookieParser =require("cookie-parser");

const express = require('express');
const router =express.Router();
// router.use(cookieParser) ;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('../db/conn');
const authenticate =require('../middleware/authenticate');
const User = require('../model/userSchema');

router.get('/',(req,res)=>{
    res.send(`hello from the server auth`)
}); 
// using promises
// router.post('/register',(req,res)=>{
//     // console.log(req.body);
//     const {name,email,phone,work,password,cpassword}=req.body;
//     if(!name || !email|| !phone|| !work || !password || !cpassword)
//     {
//         return res.status(422).json({error :"pls fill all empty feilds"});
//     }
//     User.findOne({email:email }).then((userExist)=>{
//         if(userExist)
//         {
//             return res.status(422).json({error :"email already exist pls login"});
    
//         }
//         const user = new User({name,email,phone,work,password,cpassword});
//         user.save().then(()=>{
//             return res.status(201).json({message :"User registered successfully"});
    

//         }).catch((err)=>res.status(500).json({error :"Failed to Register"}));
//     }).catch(err =>{console.log(err)    });

//     // console.log(name);
//     // res.json({message:req.body});
// });

// using async await
router.post('/register',async (req,res)=>{
      const {name,email,phone,work,password,cpassword}=req.body;
    if(!name || !email|| !phone|| !work || !password || !cpassword)
    {
        return res.status(422).json({error :"pls fill all empty feilds"});
    }
    try{
        const userExist = await User.findOne({email:email});
        if(userExist)
        {
            return res.status(422).json({error :"email already exist"});
        }
        const user = new User({name,email,phone,work ,password, cpassword});
        await user.save();
        res.status(201).json({message:"user registered succeefully"});
    }catch(err)
    {
        console.log(err);
    }
});

// login router

router.post('/signin',async (req,res)=>
{ let token;
    // console.log(req.body);
    try{
        const {email,password}=req.body;
        if(!email || !password)
        {
            return res.status(400).json({error:"invalid credentials"});
        }
        const userlogin = await User.findOne({email:email});
        if(userlogin){
       const isMatch = await bcrypt.compare(password,userlogin.password);

             token =await userlogin.generateAuthToken();
            console.log(token);
            res.cookie("jwtoken",token,{
                expires: new Date(Date.now()+2592000000),
                httpOnly:true
            })
        if(!isMatch)
        {  
            res.status(400).json({message:"user error"});
        }
        else{
            
        res.status(201).json({message:"user registered succeefully"});
        }}else{
            res.status(400).json({message:"usererror"});
        }
        

    }catch(err){
        console.log(err);
    }
});

// about ka page
router.get('/about',authenticate,(req,res)=>{
    res.send(req.rootUser);
});
router.get('/getdata',authenticate,(req,res)=>{
    res.send(req.rootUser);
});

router.post('/contactt', authenticate, async (req,res)=>{
    try{
       const {name ,email,phone,message}= req.body;
       if(!name||!email||!phone||!message){
        console.log(req.body);
        return res.json({error:"pls fill all feild"});
       }
        const usercontact =  await  User.findOne({_id:req.userId});

        console.log(req.body);
        if(usercontact){
            
        console.log("2");
            const usermessage = await usercontact.addMessage(name,email,phone,message);
            await usercontact.save();
            res.status(201).json({
                message:"completed"
            });
        }

    }catch(err){
        console.log(err);
    }
});

router.get('/logout',(req,res)=>{
    res.clearCookie('jwtoken',{path:'/'});
        console.log('cleared');
    res.status(200).send('user Logged out');
});

module.exports=router;