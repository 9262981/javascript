﻿

$(function () {

	// $('form input[type=button]').click(function () {

	// 	$.ajax({
	// 		type : 'POST',
	// 		url : 'user1.php',
	// 		data : $('form').serialize(),
	// 		success : function (response, status, xhr) {
	// 			$('#box').html(response);
	// 		},
			//timeout : 500
			//global : false
			//error : function (xhr, errorText, errorType) {
				//alert('错误！');
				//alert(errorText + ':' + errorType);
				//alert(xhr.status + ':' + xhr.statusText);
			//}
		// });

		
		// $.post('user1.php').error(function (xhr, errorText, errorType) {
		// 	//alert('错误');
		// 	alert(errorText + ':' + errorType);
		// 	alert(xhr.status + ':' + xhr.statusText);
		// });
		
		
		// $.post("user1.php");
		
		
	// });
	
	///////////全局报错///////////
	// $(document).ajaxError(function (event, xhr, settings, errorType) {
		// alert(event.type);
		//alert(event.target);
		//for (var i in event) {
		//	document.write(i + '<br />');
		//}
		// alert(settings);
		//for (var i in settings) {
		//	document.write(i + '<br />');
		//}
		// alert(settings.url);
		// alert(settings.type);
		// alert(info);
	// });
	
	
	
	// $(document).ajaxStart(function () {
	// 	$('.loading').show();
	// }).ajaxStop(function () {
	// 	$('.loading').hide();
	// })



/////////////post方式//////////////
// $('form input[type=button]').click(function () {
	
// 	$.post("user.php",$('form').serialize()).success(function  () {
// 		alert("请求成功后");
// 	}).complete(function  () {
// 		alert("请求完成后");	
// 	}).error(function  () {
// 		alert("请求失败后");	
// 	});

	
	
// });


/////////////ajax方式//////////////




// 	$('form input[type=button]').click(function () {
		
// 		$.ajax({
// 			type : 'POST',
// 			url : 'user.php',
// 			data : $('form').serialize(),
// 			success : function (response, status, xhr) {
// 				alert('请求成功后');
// 				$('#box').html(response);
// 			},
// 			complete : function () {
// 				alert('请求完成后，不管是否失败成功');
// 			},
// 			beforeSend : function () {
// 				alert('发送请求之前执行');
// 			},
// 			error : function () {
// 				alert('请求失败后');
// 			}
// 		});
		

// 	});

	

	
	
	

// });


























