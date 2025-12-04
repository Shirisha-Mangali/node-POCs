//imprort eventEmitter 
const EventEmitter=require('events');

//create emitter
const myEmitter =new EventEmitter();

//listenr for evnt
myEmitter.on('greet',name=>{
    console.log("hello",name);
});
myEmitter.on('err',(e)=>{
    console.log(e.message);
})

//emit event
myEmitter.emit('greet','abc');
myEmitter.emit('err',new Error('errorrr..'))