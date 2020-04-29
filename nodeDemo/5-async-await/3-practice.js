//找出folder1的子目录，并放到一个数组中
const fs=require('fs');
const path='./folder1';
async function isDir(arg){
    return new Promise((resolve,reject)=>{
        fs.stat(path+'/'+arg,(err,stats)=>{
            if(err) throw err;
            if(stats.isDirectory()){
                resolve(true);
            }else{
                resolve(false);
            }
        })
    })
}
function getList(){
    fs.readdir(path,async (err,lists)=>{
        if(err) throw err;
        // console.log(lists);
        var arr=[];
        /*递归的方法
        (function getDir(i){
            if(i==lists.length){
                console.log(arr)//[ 'css', 'js', 'route' ]
                return;
            }
            fs.stat(path+'/'+lists[i],(err,stats)=>{
                if(err) throw err;
                if(stats.isDirectory()){
                    arr.push(lists[i]);
                }
                getDir(i+1);
            })
        })(0)
        */
        for(let i=0;i<lists.length;i++){
            var state=await isDir(lists[i])
            if(state){
                arr.push(lists[i])
            }
        }
        console.log(arr);
    })
}
getList();
