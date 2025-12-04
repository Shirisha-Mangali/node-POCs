const {Worker} =require('worker_threads');

//Worker -cls ---used to create a new JavaScript thread inside the same Node process.
//Main Thread → runs main.js
//Worker Thread → runs worker.js

const Pool=require('./pool');
console.log("main thread started");


/*const worker=new Worker('./worker.js',{
workerData:{a:10,b:20}});
*/


//Workers normally copy data.--But with SharedArrayBuffer, workers share the same memory block.
// const shared=new SharedArrayBuffer(4);//4 bytes
// const arr=new Int32Array(shared);
// arr[0]=100;

// const worker=new Worker('./worker.js',{workerData:shared});//Start a new thread and run the file worker.js inside that thread


// worker.on('message',(data)=>{
//     console.log("received res: ",data);
// })

// worker.on('error',(err)=>{
//     console.log("error: ",err);
// });//If worker.js throws an exception → caught here.

// // worker.on('exit',(code)=>{
// //     console.log("worker exited with code: ",arr[0]);
// // });//When worker thread finishes, or you terminate it → exit event fires.


// //2 way communication
// worker.postMessage(10);
// worker.on('message',reply=>{
//     console.log("worker says: ",reply);
// })


//Worker Pool (multiple workers handling jobs)
const pool=new Pool('./worker.js');
(async function(){
    console.log(await pool.runJob(1e7));
    console.log(await pool.runJob(2e7));
    console.log(await pool.runJob(3e7));
})();