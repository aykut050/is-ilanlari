<?php
    require 'config.php';

    $tümAlanlar = mysqli_query($db,"SELECT * FROM `iş_alanı`");
    if(mysqli_num_rows($tümAlanlar) > 0){
        $tüm_alanlar = mysqli_fetch_all($tümAlanlar,MYSQLI_ASSOC);
        echo json_encode(["success"=>1,"alanlar"=>$tüm_alanlar]);
    }
    else{
        echo json_encode(["success"=>0]);
    }
?>