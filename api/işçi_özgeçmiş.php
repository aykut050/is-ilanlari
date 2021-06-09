<?php
    require 'config.php'; 
        
    $datas = json_decode(file_get_contents("php://input"));

    if(isset($datas) && !empty($datas)){

        //Client'tan gelen verileri aldık
        $id = $datas->özgeçmiş->id;
        $özGeçmiş = $datas->özgeçmiş->özGeçmiş;

        //verileri boşluklu gönderdiyse düzeltildi
        $özGeçmiş = trim($özGeçmiş);

        //işveren tablosuna veriler eklenmeli
        $query = "UPDATE `işçi` SET `özgeçmiş`='$özGeçmiş' WHERE `işçi_id`='$id'";  
            
        //sorguyu çalıştır
        $result = $db->query($query);
        
    } else {
        echo "Değişiklik yapmadınız";
    }
?>