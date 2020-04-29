class Person{
    static name(){
        if(!Person.instance){
            Person.instance=new Person();
        }
        return Person.instance;
    }
    constructor(name,age){
        this.name=name;
        this.age=age;
        console.log('创建实例')
        this.getName();
    }
    getName(){
        console.log('获取名字');
    }
}
/*单例模式用于多次创建实例没有意义，甚至损坏性能的地方（如创建Db对象，连接数据库），目的是一个类只能创建出一个对象*/
let one=Person.name();
let two=Person.name();
let three=Person.name();