<?php
    require 'config.php';

    $işçiler = mysqli_query($db,"SELECT * FROM `işçi`");
    if(mysqli_num_rows($işçiler) > 0){
        $tüm_işçiler = mysqli_fetch_all($işçiler,MYSQLI_ASSOC);
        echo json_encode(["success"=>1,"işçiler"=>$tüm_işçiler]);
    }
    else{
        echo json_encode(["success"=>0]);
    }
?>