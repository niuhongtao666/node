const {MongoClient}=require('mongodb');
const {ObjectID}=require('mongodb');
const config=require('./config')
// console.log(config)
class DB{
    static getInstance(){
        if(!DB.instance){
            DB.instance=new DB();
        }
        // console.log(123)
        return DB.instance;
    }
    constructor(){
        // console.log('创建')
        this.isConnect='';
        this.connect();
        // console.log(456)
    }
    connect(){
        var _this=this;
        // console.time('start')
        return new Promise((resolve,reject)=>{
            // console.log(_this.isConnect) 
            // console.log(!_this.isConnect)
            if(!_this.isConnect){
                // console.log(1)
                MongoClient.connect(config.app.dbUrl,{ useUnifiedTopology: true },(err,client)=>{
                    // console.timeEnd('start')
                    if(err){
                        reject(err);
                    }else{
                        _this.isConnect=client.db(config.app.dbName);
                        resolve(_this.isConnect);
                    }
                })
            }else{
                resolve(_this.isConnect);
            }
        })
    }
    find(collection,json){
        return new Promise((resolve,reject)=>{
            this.connect().then(db=>{
                let data=db.collection(collection).find(json);
                // console.log(data);
                data.toArray((err,result)=>{
                    if(err){
                        reject(err)
                    }else{
                        resolve(result)
                    }
                })
            })
        })
    }
    insert(collection,json){
        return new Promise((resolve,reject)=>{
            this.connect().then(db=>{
                db.collection(collection).insertOne(json,(err,result)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(result);
                    }
                })
            })
        })
    }
    update(collection,from,to){
        return new Promise((resolve,reject)=>{
            this.connect().then(db=>{
                db.collection(collection).updateMany(from,{$set:to},(err,result)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(result);
                    }
                })
            })
        })
    }
    remove(collection,json){
        return new Promise((resolve,reject)=>{
            this.connect().then(db=>{
                db.collection(collection).remove(json,(err,result)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(result);
                    }
                })
            })
        })
    }
    getObjectID(id){
        return new ObjectID(id);
    }
}
module.exports=DB.getInstance();
/*let dbResult=DB.getInstance();
setTimeout(()=>{
    console.time('start1')
    dbResult.find('order',{}).then(result=>{
        // console.log(result);
        console.timeEnd('start1')
    })
},20)
setTimeout(()=>{
    console.time('start2')
    dbResult.find('order',{}).then(result=>{
        // console.log(result);
        console.timeEnd('start2')
    })
},500)

let dbResult1=DB.getInstance();
setTimeout(()=>{
    console.time('start3')
    dbResult1.find('order',{}).then(result=>{
        // console.log(result);
        console.timeEnd('start3')
    })
},1000)
setTimeout(()=>{
    console.time('start4')
    dbResult1.find('order',{}).then(result=>{
        // console.log(result);
        console.timeEnd('start4')
    })
},3000)*/