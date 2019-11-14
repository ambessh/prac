const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser');
const flash=require('connect-flash');
require('dotenv').config();
const controllerRoutes=require('./routes/route');
const app=express();
const port=process.env.PORT||3000;
app.set('view engine','ejs');
app.set('views','views');
app.use(flash());

app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:false}));
app.use('/',controllerRoutes);
app.listen(port,()=>{
console.log(`starting server at port ${port}...`);
});
const router=express.Router();


mongoose.connect(`mongodb+srv://ambesh:tiwari@cluster0-awqeb.mongodb.net/test?retryWrites=true&w=majority`,{useCreateIndex:false,useNewUrlParser:true,useUnifiedTopology:true})
.then(result=>{
    console.log('connected to the database...');
})
.catch(err=>{
    console.log('failed to connect to mongo');
});
module.exports=router;