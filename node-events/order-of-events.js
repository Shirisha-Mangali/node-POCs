const EventEmitter=require('events');
const emitter = new EventEmitter();

emitter.on('event', () => console.log('Listener 1'));
emitter.prependListener('event', () => console.log('Listener 0 (first)'));
emitter.once('event', () => console.log('Listener 2 (once)'));
emitter.prependOnceListener('event', () => console.log('Listener -1 (once, first)'));

emitter.emit('event');
emitter.emit('event');


