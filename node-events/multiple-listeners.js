const EventEmitter=require('events');
const myEmitter=new EventEmitter();

//listener1
myEmitter.on('notify',()=>{
    console.log("listener 1: evnt");

});

//listener2
myEmitter.on('notify',()=>{
    console.log("listener 2: evnt");

});

//listener3
myEmitter.on('notify',()=>{
    console.log("listener 3: evnt");

});

myEmitter.emit('notify');

myEmitter.on('subscribed',()=>{
    console.log("listener 5: evnt");

});

myEmitter.on('subscribed',()=>{
    console.log("listener 7: evnt");

});
myEmitter.emit('subscribed');


//Listeners execute synchronously in the order added.
