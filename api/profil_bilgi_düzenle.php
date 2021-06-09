<?php
        require 'config.php'; 
            
        $datas = json_decode(file_get_contents("php://input"));

    if(isset($datas) && !empty($datas)){

        //Client'tan gelen verileri aldık
        $id = $datas->şirket_bilgileri->id;
        $şirket_adı = $datas->şirket_bilgileri->şirket_adı;
        $iş_yeri_adresi = $datas->şirket_bilgileri->iş_yeri_adresi;
        $telefon_numarası = $datas->şirket_bilgileri->telefon_numarası;
        $email = $datas->şirket_bilgileri->email;
        $web_sitesi = $datas->şirket_bilgileri->web_sitesi;

        //verileri boşluklu gönderdiyse düzeltildi
        $şirket_adı = trim($şirket_adı);
        $iş_yeri_adresi = trim($iş_yeri_adresi);
        $telefon_numarası = trim($telefon_numarası);
        $email = trim($email);
        $web_sitesi = trim($web_sitesi);

        echo $id;
        echo $şirket_adı;
        echo $iş_yeri_adresi;
        echo $telefon_numarası;
        echo $email;
        echo $web_sitesi;
            //işveren tablosuna veriler eklenmeli
        $query = "UPDATE `işveren` SET `şirket_adı`='$şirket_adı', `işveren_e_mail`='$email',
         `iş_yeri_adresi`='$iş_yeri_adresi', `telefon_numarası`='$telefon_numarası',
         `web_sitesi`='$web_sitesi'  WHERE `işveren_id`='$id'";  
            
            //sorguyu çalıştır
        $result = $db->query($query);
        
    } else {
            echo "Değişiklik yapmadınız";
    }
?>