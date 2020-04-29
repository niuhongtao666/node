class Db {
    //ES6类的静态方法（只能直接由类名调用的方法）：static getInstance
    //ES6类的静态属性：直接挂载在类名上的方法，如：Db.instance()
    static getInstance() {
        if (!Db.instance) {
            Db.instance = new Db();
            return Db.instance
        }
        console.log(Db.instance)
        return Db.instance;
    }
    constructor(name, age) {
        this.name = name;
        this.age = age;
        //在constructor里面可以初始化地（对象一创建就开始）运行对象的方法
        this.connect()
    }
    connect() {
        console.log("I am sillyB,我连接上了数据库")
    }
    find() {
        console.log("查询数据库")
    }
}
//单例模式创建对象时，不再使用类直接创建对象，而是使用类名调用类的静态方法来创建（或返回）对象
var db1 = Db.getInstance()
var db2 = Db.getInstance()
var db3 = Db.getInstance()
// db1.find()
// db2.find()
// db3.find()
/*结果：
I am sillyB,我连接上了数据库
查询数据库
查询数据库
查询数据库*/