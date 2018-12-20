var events=require('events');
var eventEmitter=new events.EventEmitter();
var handleSecondData=function handleSecond(){
    console.log('进程中');
}
eventEmitter.on('handleSecond',handleSecondData);
eventEmitter.on('handleData',function(){
    console.log('开始了');
    eventEmitter.emit('handleSecond');    
});
eventEmitter.emit('handleData');
console.log('结束了');