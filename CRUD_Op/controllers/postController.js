const fs=require('fs');
const path=require('path');
const dbpath=path.join(__dirname,'../data/db.json');
const multer=require('multer');


//helper to read json file
function readDB(){
    const data =fs.readFileSync(dbpath);
    return JSON.parse(data);
}
function writeDB(data){
    fs.writeFileSync(dbpath,JSON.stringify(data,null,2));
}

//GET /posts
exports.getAllPosts=(req,res)=>{
    const db=readDB();
    res.json(db.posts);
}

//GET /posts/:id

exports.getPostById=(req,res)=>{
    const db=readDB();
    const post=db.posts.find(p=>p.id==req.params.id);
    if(!post)return res.status(404).json({message:"page not found"});
    res.json(post);
}

//POST /posts
exports.createPost=(req,res)=>{
    const db=readDB();
    const newPost={
        id:Date.now(),
        title:req.body.title,
        content:req.body.content
    }
    db.posts.push(newPost);
    writeDB(db);
    res.status(201).json(newPost);
};

// PUT /posts/:id

exports.updatePost=(req,res)=>{
    const db=readDB();
    const idx=db.posts.findIndex(p=>p.id==req.params.id);
    if(idx===-1)return res.status(404).json({message:"page not found"});
    db.posts[idx]={...db.posts[idx],...req.body};
    writeDB(db);
    res.json(db.posts[idx]);
}

//DELETE /posts/:id
exports.deletePost=(req,res)=>{
    const db=readDB();
    db.posts=db.posts.filter(p=>p.id!=req.params.id);
    writeDB(db);
    res.json({message:"post deleted"});
}


// GET /posts/filter?title=anything
exports.filterPosts = (req, res) => {
    const { title, content } = req.query;
    const db = readDB();

    let posts = db.posts;

    if (title) {
        posts = posts.filter(p => 
            p.title.toLowerCase().includes(title.toLowerCase())
        );
    }

    if (content) {
        posts = posts.filter(p => 
            p.content.toLowerCase().includes(content.toLowerCase())
        );
    }

    res.json(posts);
};



//file upload 
// POST /posts/upload
exports.uploadFile=(req,res)=>{
    if(!req.file){
        return res.status(400).json({mesaage:"no file received"});
    }
    res.json({
        mesaage:"file uploaded",
        file:req.file
    })
}