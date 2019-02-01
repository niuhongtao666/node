function sayHello(){
    console.log('hello world');
};
var timer=setTimeout(sayHello,2000);
console.log('清除定时器')//清除定时器
clearTimeout(timer);