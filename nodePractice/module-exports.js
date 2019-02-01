function hello(){
    var name;
    this.sayName=function(name){
        console.log('please say your'+name);
    }
};
module.exports=hello;