const EventEmitter=require('events');
const appEmitter=new EventEmitter();

//listener to initialise db
appEmitter.once('appStart',()=>{
    console.log('coonectiong to db');
});

appEmitter.emit('appStart');
appEmitter.emit('appStart');//wont run