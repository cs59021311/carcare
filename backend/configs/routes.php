<?php
        // Array ที่เป็น routes     path file

// Temp
$routes['/api/temp']['GET'] = './member/temp/get_temp.php';        
$routes['/api/temp']['POST'] = './member/temp/post_temp.php'; 

// member
$routes['/api/member']['GET'] = './member/get.php'; // เรียกใช้งาน
$routes['/api/member']['POST'] = './member/post.php'; // สร้างตัวเรียก และลงทะเบียน rount
$routes['/api/member']['PUT'] = './member/put.php';
$routes['/api/member']['DELETE'] = './member/delete.php';