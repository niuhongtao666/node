class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getName(){
        console.log(this.name)
    }
    setName(newName){
        this.name=newName;
    }
}
let one=new Person('zhangsan',14);
one.setName('lisi');
one.getName();