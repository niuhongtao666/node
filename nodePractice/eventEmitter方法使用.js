var events=require('events');
var emitter=new events.EventEmitter();
var listener1=function listener1(){
    console.log('我是listener1');
};
emitter.once('newListener',function(event,listener){
    if(event === "connection"){
        emitter.on("connection",()=>{
            console.log('有了新的监听器');
        })
    }
});
emitter.addListener('connection',listener1);
emitter.emit('connection');