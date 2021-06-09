<?php
    require 'config.php';
    $yetenekler = mysqli_query($db,"SELECT * FROM `işçi_yetenek` INNER JOIN `işçi` ON işçi_yetenek.işçi_id = işçi.işçi_id
    ");
    if(mysqli_num_rows($yetenekler) > 0){
        $yetenekler1 = mysqli_fetch_all($yetenekler,MYSQLI_ASSOC);
        
        echo json_encode(["success"=>1,"yetenekler"=>$yetenekler1]);
    }
    else{
        echo json_encode(["success"=>0]);
    }
?>