

$(function () {
// 	.load()方法可以参数三个参数：url(必须，请求 html 文件的 url 地址，参数类型为 String)、
// data(可选，发送的 key/value 数据，参数类型为 Object)、callback(可选，成功或失败的回调
// 函数，参数类型为函数 Function)。

	$('input').click(function () {
		$('#box').load('test.html .title');
	});

	
	$('input').click(function () {
		$('#box').load('testphp.php');
	});
	//get方式
	$('input').click(function () {
		$('#box').load('testphp.php?url=simon');
	});
	//post方式
	$('input').click(function () {
		$('#box').load('testphp.php', {
			url : 'simon'
		});
	});
	
	//回调函数/1响应2状态3XMLHttpRequest的对象
	
	$('input').click(function () {
		$('#box').load('testphp.php', {
			url : 'simon'
		}, function (response, status, xhr) {
			// alert(response+'123');
			// $('#box').html(response +'123');
			// if (status == 'success') {alert('成功后的处理');}
			alert(xhr.responseText);
			//alert(xhr.responseXML);
			//alert(xhr.status);
			// alert(xhr.statusText);
		});
	});
	
	
});


























