<?php


  // 处理中文乱码
  header('content-type: text/html;charset=utf-8;');
  $uname = $_POST['zhanghao'];
  $upass = $_POST['mima'];
  // 连接数据库
  $link = mysqli_connect('127.0.0.1', 'root', 'root', 'new');


  //   执行第二种插入的 sql 语句
  $res = mysqli_query($link, 'INSERT INTO `lo` (`zhanghao`, `mima`) VALUES( $uname,  $upass)');

  // 输出结果看一下
  //   true 表示插入成功
  var_dump($res);

?>