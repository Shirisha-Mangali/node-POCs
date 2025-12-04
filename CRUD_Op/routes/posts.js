const express=require('express');
const router=express.Router();
const path=require('path');
const multer = require('multer');
const {getAllPosts,getPostById,createPost,updatePost,deletePost,filterPosts,uploadFile}=require('../controllers/postController');
const upload=multer({
    dest:path.join(__dirname,"../uploads")
})

//query params
router.get('/filter',filterPosts);

//diff betwee query vs body 
//query vs path 
//validations -form validtions


router.get('/',getAllPosts);

router.get('/:id',getPostById);
router.post('/',createPost);
router.put('/:id',updatePost);
router.delete('/:id',deletePost);


router.post('/upload',upload.single('myfile'),uploadFile);
/*upload.single('myfile')

This tells Express to accept one file.

The name 'myfile' must match the key in Postman*/

module.exports=router;