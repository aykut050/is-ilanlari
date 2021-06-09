<?php
    require 'config.php'; 
        
    $datas = json_decode(file_get_contents("php://input"));

    if(isset($datas) && !empty($datas)) {
        if($datas->yetenek1->id){
            $işçi_id = $datas->yetenek1->id;
            $yetenek = $datas->yetenek1->yetenek;

            $yetenek = trim($yetenek);
            
            if(strlen($yetenek)>0) {
                $query = "INSERT INTO işçi_yetenek(işçi_id, yetenek)
                VALUES('$işçi_id','$yetenek')";  
                    $result = $db->query($query);
            }
        }
    }
?>