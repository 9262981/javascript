

$(function () {
	
	// $.ajax()是所有 ajax 方法中最底层的方法，所有其他方法都是基于$.ajax()方法的封装。
	// 这个方法只有一个参数，传递一个各个功能键值对的对象。
	// $('form input[type=button]').click(function () {
	// 	$.ajax({
	// 		type : 'POST',
	// 		url : 'testphp.php',
	// 		data : {
	// 			url : 'simon'
	// 		},
	// 		success : function (response, status, xhr) {
	// 			$('#box').html(response);
	// 		}
	// 	});
	// });

	
	
	// $('form input[name=submit]').click(function () {
	// 	$.ajax({
	// 		type : 'POST',
	// 		url : 'user.php',
	// 		data : {
	// 			user : $('form input[name=user]').val(),
	// 			email : $('form input[name=email]').val(),
	// 			sex : $('form input[name=sex]').val()

	// 		},
	// 		success : function (response, status, xhr) {
	// 			$('#box').html(response);
	// 		}
	// 	});
	// });
	
	//表单元素特别多的情况下，写起来非常麻烦，容易出错
	//复制提交的JS内容时，data属性需要修改的非常多
	
	// $('form input[type=button]').click(function () {
	// 	$.ajax({
	// 		type : 'POST',
	// 		url : 'user.php',
	// 		data : $('form').serialize(),
	// 		success : function (response, status, xhr) {
	// 			$('#box').html(response);
	// 		}
	// 	});
	// });
	
	
	// alert($('form').serialize());			
	//字符串形式的键值对，并且还对URL进行的编码
	
	// $('form input[name=sex]').click(function () {
	// 	$('#box').html(decodeURIComponent($(this).serialize()));
	// 	// decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码。
	// });
	 


	/////////////////////////生成一组json数据
	// $('form input[name=sex]').click(function () {
	// 	$('#box').html($(this).serializeArray());
	// 	console.log($(this).serializeArray());
	// 	////////////////////////////////////
	// 	var json = $(this).serializeArray();
	// 	$('#box').html(json[0].name + '=' +json[0].value);
	// });

////////////////////////////////////////////////////////////
	//初始化重复的属性
	
	
	$.ajaxSetup({
		type : 'POST',
		url : 'user.php',
		
	});

	$('form input[type=button]').click(function () {
		$.ajax({
			
			data : $('form').serialize(),
			
			success : function (response, status, xhr) {
				$('#box').html(response)
			}
		});
	});
	

	
	// $('form input[type=button]').click(function () {
	// 	$.ajax({
	// 		type : 'POST',
	// 		url : 'user.php',
	// 		data : $.param({
	// 			user : $('form input[name=user]').val(),
	// 			email : $('form input[name=email]').val()
	// 		}),
	// 		success : function (response, status, xhr) {
	// 			$('#box').html(response);
	// 		}
	// 	});
	// });
// 	使用$.param()将对象形式的键值对转为 URL 地址的字符串键值对，可以更加稳
// 定准确的传递表单内容。因为有时程序对于复杂的序列化解析能力有限，所以直接传递 obj
// 对象要谨慎。
	

});


























