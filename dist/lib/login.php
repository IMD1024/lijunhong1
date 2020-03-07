<?php
header('content-type:text/html;charset=utf-8');
$uname = $_POST['zhanghao'];
$upass = $_POST['mima'];
$link = mysqli_connect('127.0.0.1','root','root','new');
$sql = "SELECT * FROM `lo` WHERE `zhanghao`='$uname' AND `mima`='$upass'";
$res = mysqli_query($link, $sql);
$row = mysqli_fetch_assoc($res);
mysqli_close($link);
if($row){
    echo 1;
}else{
    echo'用户名密码错误!';
}
?>