<?php
    require 'config.php';

    $şirketler = mysqli_query($db,"SELECT * FROM `işveren`");
    if(mysqli_num_rows($şirketler) > 0){
        $tüm_şirketler = mysqli_fetch_all($şirketler,MYSQLI_ASSOC);
        echo json_encode(["success"=>1,"şirketler"=>$tüm_şirketler]);
    }
    else{
        echo json_encode(["success"=>0]);
    }
?>