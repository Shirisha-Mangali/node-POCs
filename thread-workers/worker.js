const {parentPort,workerData}=require('worker_threads');//A communication channel to the parent (main thread)

/* 
const { parentPort, workerData } = require('worker_threads');

const { a, b } = workerData;
parentPort.postMessage(a + b);
*/

// const arr=new Int32Array(workerData);
// arr[0]=arr[0]+30;

// let sum=0;
// for(let i=0;i<1e9;i++){
//     sum+=i;
// }
// parentPort.postMessage(sum);


// //2 way comminication

// parentPort.on('message',(num)=>{
//     parentPort.postMessage(num*num);
// });



//worker pool -multiple workers andling jobs
parentPort.on('message', n => {
    let sum = 0;
    for (let i = 0; i < n; i++) sum += i;
    parentPort.postMessage(sum);
});

