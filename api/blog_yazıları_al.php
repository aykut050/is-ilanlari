<?php
    require 'config.php';

    $blog_yazılar = mysqli_query($db,"SELECT * FROM `blog_yazı`");
    if(mysqli_num_rows($blog_yazılar) > 0){
        $tüm_yazılar = mysqli_fetch_all($blog_yazılar,MYSQLI_ASSOC);
        echo json_encode(["success"=>1,"tüm_yazılar"=>$tüm_yazılar]);
    }
    else{
        echo json_encode(["success"=>0]);
    }
?>