var now = new Date(); //当前日期 
    var nowMonth = now.getMonth(); //当前月 
    var nowYear = now.getFullYear(); //当前年 
    //本月的开始时间
    var monthStartDate = new Date(nowYear, nowMonth, 1); 
    console.log(monthStartDate)
    //本月的结束时间
    var monthEndDate = new Date(nowYear, nowMonth+1, 0);
    console.log(monthEndDate)
    var timeStar=Date.parse(monthStartDate);//ms
    console.log(timeStar)
    var timeEnd=Date.parse(monthEndDate);//ms
    console.log(timeEnd)