<!DOCTYPE HTML>
<html lang="zh-cn">
<head>
	<meta charset="UTF-8">
	<title>json</title>
</head>
<script type="text/javascript">
	var jsonObject={
		"name":"senma",
		"age":12,
		"address":{"city":"beijing","school":"yanyuan"}
		"teach":function  () {
			alert("web,css,html,js");
		};
	};
	console.log(jsonObject.address);
	console.log(jsonObject.address.school);
	jsonObject.teach();
</script>
<body>
	123
</body>
</html>