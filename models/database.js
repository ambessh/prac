const mongoose=require('mongoose');
const schema=new mongoose.Schema({
    name:{
        type:String,
      
    },
    email:{
        type:String,
     
    },
    description:{
        type:String,
  
    }
});
const clientData=mongoose.model('clientData',schema);
module.exports=clientData;