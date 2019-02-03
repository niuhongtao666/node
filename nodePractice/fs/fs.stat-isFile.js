var fs=require('fs');
fs.stat('text.txt',function(err,stats){
    console.log(stats.isFile());//true
});