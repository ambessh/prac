const express=require('express');
const app=express();
const router=express.Router();
const monogoose=require('mongoose');
const dataClient=require('../models/database');
exports.getClientData=(req,res,next)=>{
res.render('../views/index.ejs',{
    pageTitle:'portfolio',
    flashMessage:''
});
};
exports.postClientData=(req,res,next)=>{
const name=req.body.title;
const email=req.body.email;
const description=req.body.description;
const data =new dataClient({
    name:name,
    email:email,
    description:description
});
data.save()
.then(value=>{
    res.render('../views/index.ejs',{
        pageTitle:'portfolio',
        flashMessage:'THANKYOU FOR YOUR VALUABLE REPLY'
    });
    console.log('data saved to mongo');
})
.catch(err=>{
    console.log(err,'cant save data');
});

};

