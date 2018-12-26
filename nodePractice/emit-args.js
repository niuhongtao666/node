var events=require('events');
var emitEvents=new events.EventEmitter();
emitEvents.on('newEvent',function(arg1,arg2){
    console.log('listener1',arg1,arg2);
})
emitEvents.on('newEvent',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
})
emitEvents.emit('newEvent','参数1','参数2');