<?php
        require 'config.php'; 
            
        $datas = json_decode(file_get_contents("php://input"));

        $işçi_id = $datas->iş_ilanı_kaydet->işçi_id;
        $iş_ilanı_id = $datas->iş_ilanı_kaydet->iş_ilanı_id;
        
        if(isset($datas)>0){
                
        $query = "INSERT INTO ilan_kayıt(işçi_id, iş_ilanı_id, kayıt_tarihi)
            VALUES('$işçi_id','$iş_ilanı_id',now())";  
                $result = $db->query($query);
        }
        else{
            echo "Bir veri girmelisiniz.";
        }
?>