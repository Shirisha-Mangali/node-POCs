import cluster from "cluster";
import os from "os";
import {dirname} from "path";

const __dirname=dirname(fileURLToPath(import.meta.url));
const cpuCount=os.cpus.length;
console.log(`no of cpus ${cpuCount}`);
console.log(`primary pid=${process.pid}`);

cluster.setupPrimary({
    exec:__dirname+"/index.js",
});

for(let i=0;i<cpuCount;i++){
    cluster.fork(); //spawning
}  
cluster.on("exit",(worker,code,signal)=>{
    console.log(`worker ${worker.process.pid} has been killed`);
    console.log("starting anotehr worker");
    cluster.fork();
}) 