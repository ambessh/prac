const express=require('express');
const app=express();
const router=express.Router();
const controller=require('../controllers/contoller');

router.get('/',controller.getClientData);
router.post('/',controller.postClientData);
module.exports=router;