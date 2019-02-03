//util.inspect()将任意对象转换为字符串
var util=require('util');
function Person(){
    this.name='lisi';
    this.toString=function(){
        return this.name;
    };
};
var obj=new Person();
console.log(util.inspect(obj));
/* 
Person { name: 'lisi', toString: [Function] }
*/
console.log(util.inspect(obj,true));
/* 
Person {
  name: 'lisi',
  toString:
   { [Function]
     [length]: 0,
     [name]: '',
     [arguments]: null,
     [caller]: null,
     [prototype]: { [constructor]: [Circular] } } }
*/