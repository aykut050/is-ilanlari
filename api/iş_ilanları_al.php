<?php
    require 'config.php';
    $allUsers = mysqli_query($db,"SELECT * FROM `iş_ilanı`");
    // $faaliyet_alanı = mysqli_query($db,"SELECT * FROM `faaliyet_alanı`");
    // $işveren = mysqli_query($db,"SELECT * FROM `işveren`");

    if(mysqli_num_rows($allUsers) > 0){
        $all_users = mysqli_fetch_all($allUsers,MYSQLI_ASSOC);
        // $faaliyet_alanı1 = mysqli_fetch_all($faaliyet_alanı,MYSQLI_ASSOC);
        // $işveren1 = mysqli_fetch_all($işveren,MYSQLI_ASSOC);

        echo json_encode(["success"=>1,"users"=>$all_users]);
    }
    else{
        echo json_encode(["success"=>0]);
    }
?>