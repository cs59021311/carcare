<?php
$data = json_decode(file_get_contents('php://input'));
// ทำตัวรับ

if (isset($_GET['id'])) {
    // ตรวจสอบ Validation
    if (
        isset($data->mem_fname) &&
        isset($data->mem_lname) &&
        isset($data->mem_email) &&
        isset($data->mem_address) &&
        isset($data->mem_phone)
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
    elseif (empty($data->mem_address)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_address is required']));
    } 
    elseif (empty($data->mem_phone)) {
        http_response_code(400); // error
        exit(json_encode(['message' => 'mem_phone is required']));
    }

        $query  = 'UPDATE members SET 
            mem_fname=?, 
            mem_lname=?, 
            mem_email=?,
            mem_address=?, 
            mem_phone=? WHERE mem_id=?';
        $stmt   = mysqli_prepare($database, $query);
        mysqli_stmt_bind_param(
            $stmt,
            'sssssi',
            $data->mem_fname,
            $data->mem_lname,
            $data->mem_email,
            $data->mem_address,
            $data->mem_phone,
            $_GET['id']

        ); // s คือ String
        mysqli_stmt_execute($stmt);
        $error_message  =   mysqli_error($database);

        // // ตรวจสอบว่า Update Error หรือไม่
        if ($error_message) {
            http_response_code(400); // error
            exit(json_encode(['message' => $error_message]));
        }

        exit(json_encode(['message' => 'Successful.'])); 
        
    }
}

http_response_code(400);
echo json_encode(['message' => 'The request is invalid']);

// เช็คทดลองว่าค่ามีการส่งไปมามั้ย
// echo json_encode([
//     'message'   => 'PUT METHOD', 
//     'data'      => $data,
//     'id'        => $_GET['id']
// ]);
