const express=require('express');
const router=express.Router();
router.get('/',(req,res,next)=>{
    res.send('<h1>welcome page</h1>')
})
module.exports=router;