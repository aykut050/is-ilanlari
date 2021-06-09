<?php
    require 'config.php';

    $başvuru = mysqli_query($db,"SELECT * FROM `başvuru` INNER JOIN `iş_ilanı` ON başvuru.iş_ilanı_id = iş_ilanı.iş_ilanı_id");
    if(mysqli_num_rows($başvuru) > 0){
        $başvuru1 = mysqli_fetch_all($başvuru,MYSQLI_ASSOC);
        echo json_encode(["success"=>1,"başvuru"=>$başvuru1]);
    }
    else{
        echo json_encode(["success"=>0]);
    }
?>