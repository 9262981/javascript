 <?php 
    header("Content-Type:text/html;charset=utf-8");
    
         
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "gps";
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    
    
     $w = $_POST['w'];
     $j = $_POST['j'];
   
        

  // // 创建连接
     
  $sql = "INSERT INTO usergps (ww, jj)  VALUES ($w, $j)";

  if ($conn->query($sql) === TRUE) {
      echo '<script>location.href="http://api.map.baidu.com/staticimage/v2?ak=YrAruoZGGaL8yqunIZRGHUCQ&mcode=666666&center='.$j.','.$w.'&width=500&height=300&zoom=14&scale=2&markers='.$j.','.$w.'&markerStyles=m,Y,0xFF0000"</script>';
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();

// http://api.map.baidu.com/staticimage/v2?ak=E4805d16520de693a3fe707cdc962045&center=116.403874,39.914889&width=400&height=300&zoom=11&markers=116.288891,40.004261|116.487812,40.017524|116.525756,39.967111|116.536105,39.872374|116.442968,39.797022|116.270494,39.851993|116.275093,39.935251|116.383177,39.923743&markerStyles=l,A|m,B|l,C|l,D|m,E|,|l,G|m,H

 // 
  ?>

