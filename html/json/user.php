<?php
    var_dump($_POST);
    // phpinfo();
    $servername = "localhost";
$username = "root";
$password = "";
$dbname = "oops";
 
// 创建连接
$conn = new mysqli($servername, $username, $password,$dbname);
 
// 检测连接
if ($conn->connect_error) {
    die("连接失败hahaha: " . $conn->connect_error);
} 
echo "连接成功";
$sql = "SELECT * FROM user";
$result = $conn->query($sql);
var_dump($result);
if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["user"];
    }
} else {
    echo "0 结果";
}
$conn->close();
?>