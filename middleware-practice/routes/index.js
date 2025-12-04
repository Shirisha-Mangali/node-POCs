// routes/index.js
import express from 'express';
const router = express.Router();
router.get('/',(req,res)=>{
    res.json({success:true,message:'api running'});
})
export default router;