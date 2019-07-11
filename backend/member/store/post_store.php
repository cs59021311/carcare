<?php 

$data = json_decode(file_get_contents('php://input')); // ทำตัวเปลี่ยนค่า เพราะ Angular ไม่รองรับ เพื่อไป get ค่าที่เป็นไฟล์ json

# ตรวจสอบ validation
if(isset($data->mem_service_name) && isset($data->mem_detials) && isset($data->mem_address) && isset($data->mem_province) && isset($data->mem_canton) && isset($data->mem_district) && isset($data->mem_phone)) 
{
    # ตรวจสอบค่าว่าง
    if(empty($data->mem_service_name))
    {
        http_response_code(400);
        exit(json_encode(['message' => 'mem_service_name is required'])); 
    }
    elseif(empty($data->mem_detials))
    {
        http_response_code(400);
        exit(json_encode(['message' => 'mem_detials is required'])); 
    }
    elseif(empty($data->mem_address))
    {
        http_response_code(400);
        exit(json_encode(['message' => 'mem_address is required'])); 
    }
    elseif(empty($data->mem_province))
    {
        http_response_code(400);
        exit(json_encode(['message' => 'mem_province is required'])); 
    }
    elseif(empty($data->mem_canton))
    {
        http_response_code(400);
        exit(json_encode(['message' => 'mem_canton is required'])); 
    }
    elseif(empty($data->mem_district))
    {
        http_response_code(400);
        exit(json_encode(['message' => 'mem_district is required'])); 
    }
    elseif(empty($data->mem_phone))
    {
        http_response_code(400);
        exit(json_encode(['message' => 'mem_phone is required'])); 
    }

    $query = 'INSERT INTO members (mem_service_name, mem_detials, mem_address, mem_province, mem_canton, mem_district, mem_phone) VALUES (?,?,?,?,?,?,?)';
    $stmt = mysqli_prepare($database, $query);
    mysqli_stmt_bind_param($stmt, 'sssssss',
        $data->mem_service_name,
        $data->mem_detials,
        $data->mem_address,
        $data->mem_province,
        $data->mem_canton,
        $data->mem_district,
        $data->mem_phone
    );
    mysqli_stmt_execute($stmt);
    $error_message = mysqli_error($database);

    # ตรวจสอบว่า Insert error หรือไม่
    if($error_message)
    {
        http_response_code(400);
        exit(json_encode(['message' => $error_message])); 
    }

    echo json_encode(['message' => 'Successful.']); 

}
else 
{
    http_response_code(400);
    exit(json_encode(['message' => 'The request is invalid']));   
}

// echo json_encode([
//     'message' => 'POST Member',
//     'post_data' => $data 
// ]);  