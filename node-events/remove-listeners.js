const EventEmitter = require('events');
const taskEmitter = new EventEmitter();

function onTaskCompleted(task) {
  console.log(`Task completed: ${task}`);
}

// Attach listener
taskEmitter.on('taskDone', onTaskCompleted);

// Emit event
taskEmitter.emit('taskDone', 'Database Backup'); // Runs listener

// Remove listener
taskEmitter.removeListener('taskDone', onTaskCompleted);

// Emit again
taskEmitter.emit('taskDone', 'Database Backup'); // Listener won’t run
