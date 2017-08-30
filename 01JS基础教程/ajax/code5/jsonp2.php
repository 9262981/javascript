<?php
	//这个文件是远程端：http://www.html12345.club/jsonp.php
	$_arr = array('a'=>1, 'b'=>2, 'c'=>3);
	$_result = json_encode($_arr);
	$_callback = $_GET['callback'];
	echo $_callback."($_result)";
?>