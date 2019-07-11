<?php

    $sql ='SELECT * FROM carcare.temp WHERE temp_id = (select MAX(temp_id) from carcare.temp)';
    $query = mysqli_query($database,$sql);
    
    $result = mysqli_fetch_all($query, MYSQLI_ASSOC); // ไป Get ข้อมูลมาทั้งหมด และใส่ MYSQLI_ASSOC เพื่อแปลงคีย์ value
    
    echo json_encode($result);