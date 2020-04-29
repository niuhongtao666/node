/*
    1.对象冒充继承，缺点是无法继承原型链上属性和方法
    2.原型链继承实例化时无法传参数
*/
function Parent(name,sex){
    this.name=name;
    this.sex=sex;
    this.speak=function(){
        console.log(`${this.name}在说话`);
    }
}
Parent.prototype.sing=function(){
    console.log('在唱歌')
}
function Son(name,sex){
    Parent.call(this,name,sex);//对象冒充继承
    // Parent.apply(this,[name,sex]);对象冒充继承
}

Son.prototype=new Parent();//原型链继承实例化时无法传参数
let one=new Son('erzi','男');
one.speak();
// one.sing();// 对象冒充继承one.sing is not a function