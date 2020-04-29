//找出目录，并放到一个新的数组中
const fs=require('fs');
const path='./menu';
let arr=[];
fs.readdir(path,(err,data)=>{
    if(err) throw err;
    /*因为方法异步的原因，最后有4个读取data[4],因此什么都拿不到，切换方式，改成递归
    for(var i=0;i<data.length;i++){
        fs.stat(path+'/'+data[i],(err,stats)=>{
            if(stats.isDirectory()){
                arr.push(data[i]);
            }
        })
    }*/
    (function getFolder(i){
        // console.log(i)
        if(i==data.length){
            console.log(arr);// ['css', 'js', 'lib', 'mode' ]
            return false;
        }
        fs.stat(path+'/'+data[i],(err,stats)=>{
            if(stats.isDirectory()){
                // console.log(123);
                // console.log(data[i]+'是文件夹');
                arr.push(data[i]);
            }
            getFolder(i+1);
        })
    })(0)
    // console.log(1)
    // console.log(arr);
})
// console.log(2)
// console.log(arr);