var util=require('util');
function Base(){
    this.name='base';
    this.sayHello=function(){
        console.log(this.name+'-sayHello');
    };
};
Base.prototype.sayName=function(){
    console.log('my name is '+this.name);
};
function Sub(){
    this.name='sub';
};
util.inherits(Sub,Base);
var subOne=new Sub();
subOne.sayName();//my name is sub
subOne.sayHello();//报错：subOne.sayHello is not a function