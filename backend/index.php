<?php
header('content-type: application/json; charset=utf8'); //เปลี่ยนชนิดของมันซะ 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

require './configs/defines.php'; //เรียกใช้ตัวที่ประกาศเอาไว้จากหน้า defines.php 
require './configs/routes.php'; //เรียกใช้ตัวที่ประกาศเอาไว้จากหน้า routes.php 
require './configs/database.php';

if($method === 'OPTIONS') exit; // ต้องประกาศใช้เพื่อเชื่อมกับ Angular
if(isset($routes[$route] [$method])) //เช็คว่า routes นี่มีมั้ย rount , method เป็นอะไร มีการประกาศไว้มั้ย
{
    require $routes[$route] [$method]; // ทำการ include ทำให้เวลาเรามีการสร้างและลงทะเบียนถูกต้อง ก็จะไปดึงไฟล์มาใช้งานตาม path ทันที  
}
else
{
    http_response_code(404); //ถ้าไม่มีก็แจ้ง
    echo json_encode(['message' => 'Page not found.']);
}

