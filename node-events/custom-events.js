const EventEmitter = require('events');
const notifier = new EventEmitter();

// Email notification
notifier.on('userAction', (user, action) => {
  console.log(`Email: ${user} performed ${action}`);
});

// SMS notification
notifier.on('userAction', (user, action) => {
  console.log(`SMS: ${user} performed ${action}`);
});

// In-app notification
notifier.on('userAction', (user, action) => {
  console.log(`In-App: ${user} performed ${action}`);
});

// Simulate user action
function userAction(user, action) {
  console.log(`${user} triggered an action: ${action}`);
  notifier.emit('userAction', user, action);
}

userAction('abc', 'Uploaded a file');

