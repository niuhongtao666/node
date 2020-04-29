const {MongoClient}=require('mongodb');

const url='mongodb://127.0.0.1:27017';

const dbName='trade';

const client=new MongoClient(url);
// console.time('start');
client.connect((err)=>{
    if(err) throw err;
    const db=client.db(dbName);
    /*查找数据库内容*/
    // console.timeEnd('start');
    console.log(db.collection('order').find({}))
    db.collection('order').find({}).toArray((err,data)=>{
        if(err) throw err;
        console.log('数据库连接成功');
        console.log(data);
        client.close();
        // console.timeEnd('start');
    })
    /*增加内容*/
    // db.collection('order').insertOne({'name':'增加的'},(err,data)=>{
    //     if(err) throw err;
    //     console.log('增加内容成功');
    //     console.log(data)
    //     client.close();
    // })
     /*修改内容*/
    //  db.collection('order').updateOne({name:'增加的'},{$set:{name:'增加'}},(err,result)=>{
    //     if(err) throw err;
    //     console.log('修改内容成功');
    //     client.close();
    //  })
    /*删除内容*/
    // db.collection('order').deleteMany({name:'增加'},(err,result)=>{
    //     if(err) throw err;
    //     console.log('成功删除内容');
    //     client.close();
    // })
})