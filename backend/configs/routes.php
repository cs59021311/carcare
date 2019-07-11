<?php
        // Array ที่เป็น routes     path file

// Temp
$routes['/api/temp']['GET'] = './member/temp/get_admin.php';        
$routes['/api/temp']['POST'] = './member/temp/post_member.php'; 

// member
$routes['/api/member']['GET'] = './member/get.php'; // เรียกใช้งาน
$routes['/api/member']['POST'] = './member/post_admin.php'; // สร้างตัวเรียก และลงทะเบียน rount
$routes['/api/member']['PUT'] = './member/put.php';
$routes['/api/member']['DELETE'] = './member/delete.php';