<?php
        require 'config.php'; 
            
        $datas = json_decode(file_get_contents("php://input"));

        
    if(isset($datas) && !empty($datas)){

        //Client'tan gelen verileri aldık
        $id = $datas->işçi_bilgileri->id;
        $isim = $datas->işçi_bilgileri->isim;
        $soyİsim = $datas->işçi_bilgileri->soyİsim;
        $dogumTarihi = $datas->işçi_bilgileri->dogumTarihi;
        $ePosta = $datas->işçi_bilgileri->ePosta;
        $adres = $datas->işçi_bilgileri->adres;

        //verileri boşluklu gönderdiyse düzeltildi
        $isim = trim($isim);
        $soyİsim = trim($soyİsim);
        $ePosta = trim($ePosta);
        $adres = trim($adres);

            //işveren tablosuna veriler eklenmeli
        $query = "UPDATE `işçi` SET `işçi_adı`='$isim', `işçi_soyadı`='$soyİsim',
         `işçi_eMail`='$ePosta', `işçi_doğum_tarihi`='$dogumTarihi',
         `adres`='$adres' WHERE `işçi_id`='$id'";  
            
            //sorguyu çalıştır
        $result = $db->query($query);
        
    } else {
            echo "Değişiklik yapmadınız";
    }
?>