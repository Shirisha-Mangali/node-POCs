const http=require('http');
const server =http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write("hello! this is my node serevr");
    res.end();
});
server.listen(3000,()=>{
    console.log("server runnning at http://localhost:3000");
});