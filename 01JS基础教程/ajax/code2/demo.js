

$(function () {
// 	.load()方法可以参数三个参数：url(必须，请求 html 文件的 url 地址，参数类型为 String)、
// data(可选，发送的 key/value 数据，参数类型为 Object)、callback(可选，成功或失败的回调
// 函数，参数类型为函数 Function)。
// 第四个参数为数据格式xml、html、script、json、jsonp 和 text


	//////////////////////GET方式3种方法///////////////////////////////

	// //1通过直接在url问号紧跟传参
	// $('input').click(function () {
	// 	$.get('testphp.php?url=simon', function (response, status, xhr) {
	// 		$('#box').html(response);
	// 	});
	// });
	
	
	// //3通过第二个参数data，字符串形式的键值对传参，然后自动转换为问号紧跟传参
	// $('input').click(function () {
	// 	$.get('testphp.php', 'url=simon',function (response, status, xhr) {
	// 		$('#box').html(response);
	// 		// $('#box').html(status);

	// 	});
	// });
	
	// //3通过第二个参数data，对象形式的键值对传参，然后自动转换为问号紧跟传参
	
	$('input').click(function () {
		$.get('testphp.php', {
			url : 'simon'
		},function (response, status, xhr) {
			$('#box').html(response);
		});
	});
	
	
	//////////////////////POST方式3种方法///////////////////////////////

	// $('input').click(function () {
	// 	$.post('testphp.php?url=simon', function (response, status, xhr) {
	// 		$('#box').html(response);
	// 	});
	// });
	
	// //1post提交不能使用问号传参
	
	// $('input').click(function () {
	// 	$.post('testphp.php', 'url=simon',function (response, status, xhr) {
	// 		$('#box').html(response);
	// 	});
	// });
	
	// //2post提交可以使用字符串形式的键值对传参，自动转换为http消息实体传参
	
	// $('input').click(function () {
	// 	$.post('testphp.php', {
	// 		url : 'simon'
	// 	},function (response, status, xhr) {
	// 		$('#box').html(response);
	// 	});
	// });
	
	// //3post提交可以使用对象键值对//经常用
	
	// $('input').click(function () {
	// 	$.post('testphp.php', {
	// 		url : 'simon'
	// 		//,	 cc:"cc"
	// 	},function (response, status, xhr) {
	// 		$('#box').html(response);
	// 	});												

	

	//////////////////////////TYPE返回内容的格式//////////////////////////////////////////
	// $('input').click(function () {
	// 	$.post('testphp.php', {
	// 		url : 'simon'
	// 	},function (response, status, xhr) {
	// 		$('#box').html(response);
	// 	}, 'json');												
	// });
	//PHP文件返回的数据是纯文本，默认是html或text
	// //本身是纯文本，如果强行按照xml或者json数据格式返回的话，那么就无法获取数据
	
	// $('input').click(function () {
	// 	$.post('test.xml',function (response, status, xhr) {
	// 		alert(response);
	// 	});		
	// });	


	// $('input').click(function () {
	// 	$.post('test.xml',function (response, status, xhr) {
	// 		alert(response);
	// 	}, 'html');		
	// 	});		

	//默认type就已经是xml	
	// //如果默认已经是xml，强行设置为html，则会连xml标签也返回
	/////////xml
	// $('input').click(function () {
	// 	$.post('test.xml',function (response, status, xhr) {
	// 		alert($(response).find('root').find('url').text());
	// 	});														
	// });
	////////2json
	// $('input').click(function () {
	// 	$.post('test.json',function (response, status, xhr) {
	// 		alert(response[0].name);
	// 	});															
	// });
////////////////////////////getJSON方法///////////
// jQuery 提供了一组用于特定异步加载的方法：$.getScript()，用于加载特定的 JS 文件；
// $.getJSON()，用于专门加载 JSON 文件。

	// $('input').click(function () {
	// 	$.getJSON('test.json',function (response, status, xhr) {
	// 		alert(response[0].url);
	// 	});																	
	// });
	
// 有时我们希望能够特定的情况再加载 JS 文件，而不是一开始把所有 JS 文件都加载了，
// 这时课时使用$.getScript()方法。

	$('input').click(function () {
		$.getScript('test.js');																	
	});

	
});


























