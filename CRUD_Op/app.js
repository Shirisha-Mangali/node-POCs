const express=require('express');
const app=express();// creates an Express application
//this is server object
//internally uses Node's http server

const postsRouter=require('./routes/posts');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("home page")
});

app.use('/posts', postsRouter);

app.listen(3000,()=>{
    //res.send("hiii");
    console.log("server runiing on http://localhost:3000");
})