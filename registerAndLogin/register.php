<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods", "POST,OPTIONS,GET");
//编辑文字格式
header("Content-Type:text/html;charset=utf-8");                     
//链接数据库
$con=mysql_connect("w.rdc.sae.sina.com.cn:3307","on50ynl531","3w3iyz2x1k110hy4zm3jm45yw1xwwll2z1w314y1")or die("连接失败！");
//选择用户
 mysql_select_db("app_duif");

$name = $_POST["name"];

$pwd = $_POST["pwd"];

$email = $_POST["email"];

$link=mysql_query("use userName");

$sql=mysql_query("select * from userName where name='".$name."';");

$result=mysql_fetch_array($sql);
if ($name&&$pwd&&$email) {
	if($result){
	    $result = array (
	        'success' => false,
	        'reCode' => 1002,
	        'reMsg' => '用户名已存在'
	    );
	    echo json_encode($result);
	}else{
		$insert = mysql_query("insert into userName(name,pwd,email)values('".$name."','".$pwd."','".$email."')");
	    $result = array (
	        'success' => true,
	        'reCode' => 200,
	        'reMsg' => '注册成功'
	    );
	    echo json_encode($result);
	}
}else{
	$result = array ( 
        'success' => false,
        'reCode' => 1003,
        'reMsg' => '字段为空'
    );
    echo json_encode($result);
}
