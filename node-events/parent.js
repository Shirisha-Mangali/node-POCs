const { EventEmitter } = require('events');

// Singleton emitter
const greetingEmitter = new EventEmitter();
module.exports = { greetingEmitter };

// Function to emit greetings
function sendGreeting() {
  greetingEmitter.emit('greetings', 'Hello World!');
  console.log('[Parent] sent message!');
}

// Send greetings after 1 second
setTimeout(() => {
  sendGreeting();
  sendGreeting();
  sendGreeting();
}, 1000);
