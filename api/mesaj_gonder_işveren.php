<?php
    require 'config.php'; 
        
    $datas = json_decode(file_get_contents("php://input"));

    if(isset($datas) && !empty($datas)){

        //Client'tan gelen verileri aldık
        $id = $datas->mesaj1->işveren_id;
        $mesaj = $datas->mesaj1->mesaj;
        $alıcı_id = $datas->mesaj1->alıcı_id;

        //verileri boşluklu gönderdiyse düzeltildi
        $mesaj = trim($mesaj);
        if(strlen($alıcı_id)>0 && strlen($id)>0 && strlen($mesaj)>0 ){
        //işveren tablosuna veriler eklenmeli
        $query = "INSERT INTO mesajlar(gönderen_işveren_id, mesaj, alıcı_işçi_id)
        VALUES('$id','$mesaj','$alıcı_id')";  
            
        //sorguyu çalıştır
        $result = $db->query($query);
        }
    } else {
        echo "Veri Boş";
    }
?>