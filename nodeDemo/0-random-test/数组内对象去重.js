var hash = {};
var myapplyList=[
    {id:1,name:'zhangsan'},
    {id:1,name:'lisi'},
    {id:2,name:'wangwu'},
    {id:2,name:'lisi'},
]
var key='id'
    myapplyList = myapplyList.reduce(function(item, next) {
    let value=next[key];
      hash[value] ? "" : (hash[value] = true && item.push(next));
      return item;
    }, []);
    console.log(myapplyList)