<?php
    require 'config.php';
    $mesajlar = mysqli_query($db,"SELECT * FROM `mesajlar`");
    $işveren = mysqli_query($db,"SELECT * FROM `işveren`");
    $işçi = mysqli_query($db,"SELECT * FROM `işçi`");
    if(mysqli_num_rows($mesajlar) > 0){
        $mesajlar1 = mysqli_fetch_all($mesajlar,MYSQLI_ASSOC);
        $işveren1 = mysqli_fetch_all($işveren,MYSQLI_ASSOC);
        $işçi1 = mysqli_fetch_all($işçi,MYSQLI_ASSOC);
        echo json_encode(["success"=>1,"mesajlar"=>$mesajlar1,"işçi"=>$işçi1,"işveren"=>$işveren1]);
    }
    else{
        echo json_encode(["success"=>0]);
    }
?>