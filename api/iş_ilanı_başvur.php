<?php
        require 'config.php'; 
            
        $datas = json_decode(file_get_contents("php://input"));

        $işçi_id = $datas->iş_ilanı_başvuru->işçi_id;
        $iş_ilanı_id = $datas->iş_ilanı_başvuru->iş_ilanı_id;

        if(isset($datas) && !empty($datas)){
                
        $query = "INSERT INTO başvuru(başvuran_işçi_id, iş_ilanı_id, başvuru_tarihi)
            VALUES('$işçi_id','$iş_ilanı_id',now())";  
                $result = $db->query($query);
        }
        else{
            echo "Bir veri girmelisiniz.";
        }
?>