//输出当前目录
console.log('当前目录：'+process.cwd());
/*
node nodePractice/process-function.js---->/Users/niuhongtao/Desktop/node
node process-function.js --->/Users/niuhongtao/Desktop/node/nodePractice
*/
//输出当前版本
console.log('当前版本：'+process.version);//当前版本：v8.11.1
//输出内存使用情况
console.log(process.memoryUsage());
/*
{ rss: 21282816,
  heapTotal: 7159808,
  heapUsed: 4435040,
  external: 8224 }


*/