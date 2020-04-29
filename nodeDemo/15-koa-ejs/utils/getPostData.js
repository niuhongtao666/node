exports.postData=function(ctx){
    return new Promise((resolve,reject)=>{
        try{
            var arr=[];
            ctx.req.on('data',(chunk)=>{
                arr.push(chunk);
            }).on('end',()=>{
                let data=Buffer.concat(arr).toString();
                resolve(data);
            })
        }catch(err){
            console.log(err);
            reject(err);
        }
    })
}