<?php
    require 'config.php';

    $blog_yazı_yorumlar = mysqli_query($db,"SELECT * FROM `yorumlar`");
    if(mysqli_num_rows($blog_yazı_yorumlar) > 0){
        $yorumlar = mysqli_fetch_all($blog_yazı_yorumlar,MYSQLI_ASSOC);
        echo json_encode(["success"=>1,"yorumlar"=>$yorumlar]);
    }
    else{
        echo json_encode(["success"=>0]);
    }
?>