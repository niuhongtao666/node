class Parent{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    getName(){
        console.log(this.name)
    }
    setName(newName){
        this.name=newName
        console.log(this.name)
    }
    static speak(){//one.speak is not a function静态方法的不能被继承
        console.log('说话')
    }
}
class Child extends Parent{
    constructor(name,age,sex){
        super(name,age);
        this.sex=sex;
    }
    getSex(){
        console.log(this.sex);
    }
}
let one=new Child('shangsan',13,'男');
// one.speak();
// one.getSex();
Parent.speak();