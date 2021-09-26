const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull', () => {
  console.log('Please turn off motor');
  setTimeout(() => {
    console.log('gentle reminder turn off motor');
  }, 3000);
});

myEmitter.emit('WaterFull'); // call event 