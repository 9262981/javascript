function getDate(){
	var now=new Date();//获得日期对象
		var year=now.getYear()+1900;//获得年
		var month=now.getMonth()+1;//获得月份
		var date=now.getDate();//获取日
		var day=now.getDay();//获取星期，day代表的是本周的第几天，[0,6]
		var arr_week=new Array("星期日","星期一","星期二",
			"星期三","星期四","星期五","星期六");
		var week=arr_week[day];
		var time="当前时间："+year+"年"+month+"月"+date+"日 "+week;
		alert(time);
}