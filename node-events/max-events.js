const EventEmitter = require('events');
const emitter = new EventEmitter();

console.log('Default max listeners:', emitter.getMaxListeners()); // 10

// Increase the limit
emitter.setMaxListeners(200);

console.log('Updated max listeners:', emitter.getMaxListeners()); // 100
