<!DOCTYPE html>
<html>
<head>
    <title>Geolocation Example获取经度纬度</title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <script src="http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
</head>
<body>
    <script>
    

        $(function () {
          
          navigator.geolocation.getCurrentPosition(getPositionSuccess, getPositionError);
      
          function getPositionSuccess( position ){
             w = position.coords.latitude;

             j = position.coords.longitude;
             $("#w").val(w);
             $("#j").val(j);

             
          }
         
          //var url=http://api.map.baidu.com/staticimage/v2?ak=YrAruoZGGaL8yqunIZRGHUCQ&mcode=666666&center=116.403874,39.914888&width=300&height=200&zoom=11
           // $.get('testphp.php?url=simon', function (response, status, xhr) {
           //   $('#box').html(response);
           // });
             function getPositionError(error){
                 switch(error.code){
                     case error.TIMEOUT :
                         alert( " 连接超时，请重试 " );
                         break;
                     case error.PERMISSION_DENIED :
                         alert( " 您拒绝了使用位置共享服务，查询已取消 " );
                         break;
                     case error.POSITION_UNAVAILABLE :  
                         alert( " 亲爱的火星网友，非常抱歉，我们暂时无法为您所在的星球提供位置服务 " );
                         break;
                 }
             }
         setTimeout("document.form1.submit()",2000) 
        })
       
    </script>
    
   
    <form method="post" name="form1" action="php.php">
      <input id="w" type="hidden" name="w" >
      <input id="j" type="hidden" name="j" >
    </form>
</body>
</html>
