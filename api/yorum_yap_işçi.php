<?php
    require 'config.php'; 
        
    $datas = json_decode(file_get_contents("php://input"));

    if(isset($datas) && !empty($datas)) {
        if($datas->yorum1->işçi_id){
            $işçi_id = $datas->yorum1->işçi_id;
            $yorum = $datas->yorum1->yorum;
            $yazı_id = $datas->yorum1->yazı_id;
            $yorum = trim($yorum);
            
            if(strlen($yorum)>0) {
                $query = "INSERT INTO yorumlar(yorum, yorum_işçi_id, yazı_id, yayın_tarihi)
                VALUES('$yorum','$işçi_id','$yazı_id',now())";  
                    $result = $db->query($query);
            }

        }
    }
?>