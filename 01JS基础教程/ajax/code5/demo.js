

$(function () {


	$('form input[type=button]').click(function () {
		
	
		// $.ajax({
		// 	type : 'POST',
		// 	url : 'test.json',
		// 	dataType : 'json',
		// 	success : function (response, status, xhr) {
		// 		alert(response[0].url);
		// 		alert(response);
		// 	}
		// });

		
		//本地获取jsonp.php文件，成功
		// $.ajax({
		// 	type : 'POST',
		// 	url : 'jsonp.php',
		// 	dataType : 'json',
		// 	success : function (response, status, xhr) {
		// 		// alert(response);
		// 		alert(response.a);
		// 	}
		// });

		
		//跨域获取jsonp.php文件，失败
		// $.ajax({
		// 	type : 'POST',
		// 	url : 'http://www.9262981.com/jsonp.php',
		// 	dataType : 'json',
		// 	success : function (response, status, xhr) {
		// 		//alert(response);
		// 		// console.log(response);
		// 		alert(response.a);
		// 	}
		// });
		


		//本地获取jsonp2.php文件，成功
		// $.getJSON('jsonp2.php?callback=?', function (response) {
		// 	alert(response.a);
		// 	console.log(response);
		// });

		
		//跨域，远程
		// $.getJSON('http://www.9262981.com/jsonp2.php?callback=?', function (response) {
		// 	alert(response.a);
		// 	console.log(response);
		// });

		
		//$.ajax()获取远程数据
		// $.ajax({
		// 	type : 'POST',
		// 	url : 'http://www.9262981.com/jsonp2.php?callback=?',
		// 	dataType : 'json',
		// 	success : function (response, status, xhr) {
		// 		//alert(response);
		// 		console.log(response);
		// 		alert(response.a);
		// 	}
		// });

		//$.ajax()获取远程数据
		// $.ajax({
		// 	type : 'POST',
		// 	url : 'http://www.9262981.com/jsonp2.php',
		// 	dataType : 'jsonp',
		// 	success : function (response, status, xhr) {
		// 		//alert(response);
		// 		console.log(response);
		// 		alert(response.a);
		// 	}
		// });
////////////////////////////////////////////////////////////
		//jqXHR就是$.ajax()返回的对象
		var jqXHR = $.ajax({
								type : 'POST',
								url : 'user.php',
								data : $('form').serialize()
							});
		
		// jqXHR.success(function (response) {
		// 	alert(response);
		// });
		
		
		// jqXHR.done(function (response) {
		// 	alert(response + '1');
		// }).done(function (response) {
		// 	alert(response + '2');
		// });
		
		// jqXHR.done(function (response) {
		// 	alert(response + '3');
		// });
	
	//////////////////////////////////////////////////	
		var jqXHR = $.ajax('t1.php');
		var jqXHR2 = $.ajax('t2.php');
		
		
		// jqXHR.done(function (response) {
		// 	alert(response);
		// })
		
		// jqXHR2.done(function (response) {
		// 	alert(response);
		// })
		
		
		$.when(jqXHR, jqXHR2).done(function (r1, r2) {
			alert(r1[0]);
			alert(r2[0]);
		})
		
	});
	

});


























