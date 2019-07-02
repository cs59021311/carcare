<?php
header('content-type: application/json; charset=utf8'); //เปลี่ยนชนิดของมันซะ 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: *');
header('Access-Control-Allow-Headers: *');

require './configs/defines.php';

switch ($route) {
    case '/api/test';
        if ($method == 'GET') {
            echo json_encode(['message' => 'Hello GET']);
            break;
        }
        elseif ($method == 'POST') {
            $data = json_decode(file_get_contents('php://input'));
            echo json_encode(['
            message' => 'Hello POST', 
            'post_data' => $data->message
            ]);
            break;
        }
        elseif ($method == 'PUT') {
            echo json_encode(['message' => 'Hello Update']);
            break;
        }
        elseif ($method == 'DELETE') {
            echo json_encode(['message' => 'Hello DELETE']);
            break;
        }
        elseif($method == 'OPTIONS') exit;

    default:
        http_response_code(404);
        echo json_encode(['message' => 'Page not found.']);
}
