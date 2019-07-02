<?php

$data = json_decode(file_get_contents('php://input')); // ทำตัวเปลี่ยนค่า เพราะ Angular ไม่รองรับ เพื่อไป get ค่าที่เป็นไฟล์ json

// ตรวจสอบ Validation
if (

    isset($data->mem_fname) &&
    isset($data->mem_lname) &&
    isset($data->mem_email) &&
    isset($data->mem_address) &&
    isset($data->mem_phone) &&
    isset($data->mem_id_card) &&
    isset($data->mem_password) &&
    isset($data->mem_cpassword) &&
    isset($data->mem_service_name) &&
    isset($data->mem_detials) &&
    isset($data->mem_province) &&
    isset($data->mem_canton) &&
    isset($data->mem_district) 

) {
    // ตรวจสอบค่าว่าง
    if (empty($data->mem_fname)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_fname is required']));
    } 
    elseif (empty($data->mem_lname)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_lname is required']));
    } 
    elseif (empty($data->mem_email)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_email is required']));
    }
    elseif (empty($data->mem_id_card)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_id_card is required']));
    }
    elseif (empty($data->mem_password)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_password is required']));
    }
    elseif (empty($data->mem_cpassword)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_cpassword is required']));
    }
    elseif (empty($data->mem_service_name)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_service_name is required']));
    }
    elseif (empty($data->mem_detials)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_detials is required']));
    }
    elseif (empty($data->mem_province)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_province is required']));
    }
    elseif (empty($data->mem_canton)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_canton is required']));
    }
    elseif (empty($data->mem_email)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_email is required']));
    }
    elseif (empty($data->mem_district)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_district is required']));
    } 
    elseif (empty($data->mem_address)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_address is required']));
    } 
    elseif (empty($data->mem_phone)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_phone is required']));
    }

    $query  = 'INSERT INTO members (
        mem_fname,
        mem_lname,
        mem_id_card,
        mem_email,
        mem_password,
        mem_cpassword,
        mem_service_name,
        mem_address,
        mem_detials,
        mem_province,
        mem_canton,
        mem_district,
        mem_phone
        ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'; // bind param
        
        $stmt   = mysqli_prepare($database, $query);
        mysqli_stmt_bind_param($stmt, 'sssssssssssss', // s คือ String
            $data->mem_fname,
            $data->mem_lname,
            $data->mem_id_card,
            $data->mem_email,
            $data->mem_password,
            $data->mem_cpassword,
            $data->mem_service_name,
            $data->mem_address,
            $data->mem_detials,
            $data->mem_province,
            $data->mem_canton,
            $data->mem_district,
            $data->mem_phone
    ); 
    mysqli_stmt_execute($stmt); // ทำการ execute มันซะ
    $error_message  =   mysqli_error($database);

    // ตรวจสอบว่า Insert Error หรือไม่
    if($error_message)
    {
        http_response_code(400); // error
        exit(json_encode(['message' => $error_message]));
    }

    echo json_encode(['message' => 'Successful.']);
}
else
{
    http_response_code(400); // error
    exit(json_encode(['message' => 'The request is invalid']));
}


// echo json_encode([
//     'message'    => 'POST Member',
//     'post_data'  => $data // เปลี่ยนให้มันเป็น Message เพราะไม่งั้นมันจะส่งแบบ Object 
// ]);

    

    

