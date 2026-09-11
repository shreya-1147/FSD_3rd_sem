const EventEmitter=require('events');
const myEmitter=new EventEmitter();
myEmitter.on('great',(name)=>{
console.log('Welcome, ${name}');
});
myEmitter.on('exit',(code)=>{
    console.log('Exit event received. Code: ${code}');
});
myEmitter.emit('great','B.Tech students');
myEmitter.emit('exit',0); 