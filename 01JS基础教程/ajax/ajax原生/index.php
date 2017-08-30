<!DOCTYPE html>
<meta charset="UTF-8">
<html>
<head>
<script>
    function loadXMLDoc()
    {
    var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();//一个对象
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }
      // 创建XMLHttpRequest 对象

      // 所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。

      // XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
      ///onreadystatechange事件。类似于onload
    xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
        document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
        }
      }
    xmlhttp.open("GET","hw.txt?time="+new Date().getTime(),true);
    xmlhttp.send();
    }
</script>
</head>
<body>

<div id="myDiv"><h2>使用 AJAX 修改该文本内容</h2></div>
<button type="button" onclick="loadXMLDoc()">修改内容</button>
<pre>
  readyState  

  存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。

      0: 请求未初始化
      1: 服务器连接已建立
      2: 请求已接收
      3: 请求处理中
      4: 请求已完成，且响应已就绪
  status  200: "OK"
      404: 未找到页面
</pre>
</body>
</html>
