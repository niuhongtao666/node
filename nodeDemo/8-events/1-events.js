const events=require('events');
// console.log(events)
const eventEmitter=new events.EventEmitter();
eventEmitter.on('first',function(data){
    console.log(data)
})
setTimeout(() => {
    eventEmitter.emit('first','数据');
}, 1000);