<?php
    require 'config.php'; 
        
    $datas = json_decode(file_get_contents("php://input"));

    if(isset($datas) && !empty($datas)) {
        if($datas->eleman1->id){
            $işveren_id = $datas->eleman1->id;
            $girilen_değer = $datas->eleman1->eklenen_eleman;
            $girilen_değer = trim($girilen_değer);
            
            if(strlen($girilen_değer)>0) {
                $query = "INSERT INTO faaliyet_alanı(faaliyet_alanı, işveren_id)
                VALUES('$girilen_değer','$işveren_id')";  
                    $result = $db->query($query);
            }
        }
    }
?>