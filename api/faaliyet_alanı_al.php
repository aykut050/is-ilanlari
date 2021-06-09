<?php
    require 'config.php';

    $faaliyet_alanı = mysqli_query($db,"SELECT * FROM `faaliyet_alanı`");
    if(mysqli_num_rows($faaliyet_alanı) > 0){
        $faaliyet_alanı1 = mysqli_fetch_all($faaliyet_alanı,MYSQLI_ASSOC);
        echo json_encode(["success"=>1,"faaliyet_alanı"=>$faaliyet_alanı1]);
    }
    else{
        echo json_encode(["success"=>0]);
    }
?>