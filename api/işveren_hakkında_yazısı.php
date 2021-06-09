<?php
    require 'config.php'; 
        
    $datas = json_decode(file_get_contents("php://input"));

    if(isset($datas) && !empty($datas)){

        //Client'tan gelen verileri aldık
        $id = $datas->işveren_hakkında->id;
        $hakkında = $datas->işveren_hakkında->hakkında;

        //verileri boşluklu gönderdiyse düzeltildi
        $hakkında = trim($hakkında);

        //işveren tablosuna veriler eklenmeli
        $query = "UPDATE `işveren` SET `hakkında`='$hakkında' WHERE `işveren_id`='$id'";  
            
        //sorguyu çalıştır
        $result = $db->query($query);
        
    } else {
        echo "Değişiklik yapmadınız";
    }
?>