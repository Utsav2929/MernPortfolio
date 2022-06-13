
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const mongoose=require('mongoose');
const express =require('express');
const app=express();
dotenv.config({path:'./config.env'});
require('./db/conn.js');
// to understand json
app.use(express.json());

app.use(cookieParser());
const User = require('./model/userSchema');
const authenticate = require('./middleware/authenticate.js');
app.use(require('./router/auth'));
const PORT =process.env.PORT;


// const middleware = (req,res,next)=>{
//     console.log(`hello my middleware`)
//     next();

// }

// app.get('/',(req,res)=>{
//     res.send(`hello from the server`)
// });
// app.get('/about',authenticate,(req,res)=>{
//     res.send(`hello from about the server`)
// });
// app.get('/contact',(req,res)=>{
//     // res.cookie("test",'utsav');
//     res.send(`hello from contact the server`)
// });
// app.get('/signin',(req,res)=>{
//     res.send(`hello from signin nthe server`)
// });
// app.get('/register',(req,res)=>{
//     res.send(`hello from register the server`)
// });

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
});