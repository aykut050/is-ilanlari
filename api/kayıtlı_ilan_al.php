<?php
    require 'config.php';

    $ilan_kayıt = mysqli_query($db,"SELECT * FROM `ilan_kayıt` INNER JOIN `iş_ilanı` ON ilan_kayıt.iş_ilanı_id = iş_ilanı.iş_ilanı_id");
    if(mysqli_num_rows($ilan_kayıt) > 0){
        $ilan_kayıt1 = mysqli_fetch_all($ilan_kayıt,MYSQLI_ASSOC);
        echo json_encode(["success"=>1,"ilan_kayıt"=>$ilan_kayıt1]);
    }
    else{
        echo json_encode(["success"=>0]);
    }
?>