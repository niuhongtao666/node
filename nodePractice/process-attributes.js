//输出到终端
process.stdout.write('hello world'+'\n');//hello world
//参数读取
process.argv.forEach(function(val,index,array){
    console.log(index+':'+val);
    /*
        0:/usr/local/bin/node
        1:/Users/niuhongtao/Desktop/node/nodePractice/process-attributes.js
    */
});
//获取执行路径
console.log(process.execPath);//      /usr/local/bin/node
//平台信息
console.log(process.platform);//darwin