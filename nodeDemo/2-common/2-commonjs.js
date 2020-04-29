/*引入模块自动去找index.js文件，如果没有index.js文件，就会报错（例如Error: Cannot find module 'db'）
要想不使用index.js文件可以npm init 生成package.json, 修改main入口*/
const axios=require('axios')
const db=require('db')
axios.get();
axios.post();