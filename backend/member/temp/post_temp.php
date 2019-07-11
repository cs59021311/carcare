<?php

$data = json_decode(file_get_contents('php://input'));

// ตรวจสอบ Validation
if(isset($data->temp_fname) && 
isset($data->temp_lname) && 
isset($data->temp_username) &&
isset($data->temp_id_card) &&
isset($data->temp_email) &&
isset($data->temp_password) &&
isset($data->temp_cpassword)) 
{
    // ตรวจสอบค่าว่าง
    if (empty($data->temp_fname)) 
    {
        http_response_code(400); // error
        exit(json_encode(['message' => 'temp_fname is required']));
    }
    elseif (empty($data->temp_lname)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'temp_lname is required']));
    } 
    elseif (empty($data->temp_id_card)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'temp_id_card is required']));
    }
    elseif (empty($data->temp_username)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'temp_username is required']));
    }
    elseif (empty($data->temp_email)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'temp_email is required']));
    }
    elseif (empty($data->temp_password)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'temp_password is required']));
    }
    elseif (empty($data->temp_cpassword)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'temp_cpassword is required']));
    }
    
    $query  = 'INSERT INTO temp (
        temp_fname,
        temp_lname,
        temp_username,
        temp_id_card,
        temp_email,
        temp_password,
        temp_cpassword
        ) VALUES(?, ?, ?, ?, ?, ?, ?)'; // bind param
        
        $stmt   = mysqli_prepare($database, $query);
        mysqli_stmt_bind_param($stmt, 'sssssss', // s คือ String
            $data->temp_fname,
            $data->temp_lname,
            $data->temp_username,
            $data->temp_id_card,
            $data->temp_email,
            $data->temp_password,
            $data->temp_cpassword
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
//     'message' => 'POST Temp data',
//     'post_data' => $data
// ]);