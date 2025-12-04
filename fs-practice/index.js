//writeFile
/*creates a file if not exist
 overwrites completely if file exists
 async (non-blocking)*/

 const fs=require("fs");
 const path=require("path");

 const filepath=path.join(__dirname,"files","note.txt");
 //__dirname=>abs path of curr dir were js file is runnning
 console.log("path : ", filepath);

 fs.writeFile(filepath,"fst",{flag:"a"},(err)=>{
    if(err){console.log("err writing to file: ",err);return}
    console.log("file created or overwitrn succesfully");
 })

//  fs.appendFile(filepath,"\n new textjdas",(err)=>{
//     if(err)throw err;
//     console.log("content appended!");
//  })

 //both write & append will create files if doesnot exists

 //append -1 
 //write -2 overriden the appended text



//  fs.writeFileSync(filepath,"write sync",err=>{
//     if(err){console.log("err while writesync ");return;}
//     console.log("writefile sync successful");
//  })


//  fs.readFile(filepath,"utf-8",(err,data)=>{
//     if(err){
//         console.log("err : ",data);
//         return ;
//     }
//     console.log("conetent: ",data);
//  })

 try{
    const data=fs.readFileSync(filepath,"utf-8");
    console.log("content: ",data);
 }catch(err){
    console.log("err : ",err);
 }

//  //rename
//  const newpath=path.join(__dirname,"files","new-notes.txt");
//  fs.rename(filepath,newpath,err=>{
//     if(err)throw err;
//     console.log("file renamed!");
//  })


 //unlink
//  fs.unlink(filepath,err=>{
//     if(err)throw err;
//     console.log("file delted");
//  })


 //access-checks existence--async

 //F_OK -does the file exist?
 fs.access(filepath,fs.constants.F_OK,err=>{
    if(err){console.log("file does not exist");}
    else console.log("file exists");
 })


 //stat--file info
fs.stat(filepath,(err,stats)=>{
    if(err)throw err;
    console.log("is file?",stats.isFile());
    console.log("is folder? ",stats.isDirectory());
    console.log("file size: ",stats.size);
    console.log("created: ",stats.birthtime);
})

// /*If parent folders don’t exist → create them automatically
// Create the entire folder tree*/
// const folder=path.join(__dirname,"files")
fs.mkdir(folder,{recursive:true},(err)=>{
    if(err)throw err;
    console.log("folder created");
})


// fs.rm(folder, { recursive: true, force: true }, (err) => {
//   if (err) throw err;
//   console.log("Folder deleted!");
// });