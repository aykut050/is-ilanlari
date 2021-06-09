<?php
        require 'config.php'; 
            
        $datas = json_decode(file_get_contents("php://input"));

        $data1 = $datas->iş_ilanı->data;
        $id1 = $datas->iş_ilanı->id;
        $unvan = $datas->iş_ilanı->unvan;
        $alan = $datas->iş_ilanı->alan;
        $pozisyon = $datas->iş_ilanı->pozisyon;


        $iş_ilanı_bilgi = trim($data1);
        $unvan = trim($unvan);

        if(strlen($data1)>0 && strlen($unvan)){
                
            $query = "INSERT INTO iş_ilanı(iş_ilanı_açıklama, unvan, iş_veren_id, alan, pozisyon ,yayın_tarihi)
            VALUES('$iş_ilanı_bilgi','$unvan','$id1','$alan','$pozisyon',now())";  
                $result = $db->query($query);
        }
        else{
            echo "Bir veri girmelisiniz.";
        }
           
?>