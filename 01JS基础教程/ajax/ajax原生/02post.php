<!DOCTYPE HTML>
<html lang="zh-cn">
<head>
	<meta charset="UTF-8">
	<title>helloWorld</title>
</head>
<script type="text/javascript">
	window.onload=function  () {
		document.getElementsByTagName('a')[0].onclick=function  () {
			//3 创建XMLHttpRequest对象

			var request=new XMLHttpRequest();
			
			//4 发送请求数据：url
			var url= this.href+"?time="+new Date();
			var method="POST";

			//5 调用XMLRequest对象的open方法；
			request.open(method,url);
			// 1///console.log(request.readyState);
			//6 调用XMLHttpRequest对象的send方法；
			
			request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			request.send("name");
			//7 为XMLHttpRequest对象添加 onreadystatechange相应函数
			request.onreadystatechange=function  () {
				//8 判断相应是否完成。readyState=4 
				console.log(request.readyState);
				if(request.readyState==4){
					//9 判断响应是否可用 status=200
					if(request.status==200||request.status==304){
						//10 打印相应结果：responseText
						alert(request.responseText);
					}
				}
			}
			
			

			return false;
		}
	}
</script>
<body>
	<a href="hw.txt">helloWorld</a>
</body>
</html>