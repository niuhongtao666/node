exports.getExtname=async function(fs,name){
    /*最初
    switch(name){
        case '.html':
            return 'text/html';
            break;
        case '.css':
            return 'text/css';
            break; 
        case '.js':
            return 'text/js';
            break;  
        default:
            return 'text/html';  
    }*/
    //异步，所以存在无法读取的问题
    // fs.readFile('./mime.json',(err,data)=>{
    //     if(err) throw err;
    //     let exts=JSON.parse(data.toString());
    //     // console.log(name)
    //     // console.log(typeof exts);
    //     return exts[name] || 'text/html';
    // })
    //直接转成同步的
    /*let data=fs.readFileSync('./mime.json');
    let exts=JSON.parse(data.toString());
    return exts[name] || 'text/html';*/

    //使用async,await方法
    let result=await getInfo(fs,name);
    return result;
}
async function getInfo(fs,name){
    return new Promise((resolve,reject)=>{
        fs.readFile('./mime.json',(err,data)=>{
            if(err) throw err;
            let exts=JSON.parse(data.toString());
            resolve(exts[name] || 'text/html');
        })
    })
}