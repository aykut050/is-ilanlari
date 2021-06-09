<?php
    require 'config.php';
    $bildirimler = mysqli_query($db,"SELECT * FROM `başvuru` INNER JOIN `iş_ilanı` ON 
    başvuru.iş_ilanı_id = iş_ilanı.iş_ilanı_id INNER JOIN `işçi` ON 
    başvuru.başvuran_işçi_id = işçi.işçi_id");
   
    if(mysqli_num_rows($bildirimler) > 0){
        $bildirimler1 = mysqli_fetch_all($bildirimler,MYSQLI_ASSOC);
       
        echo json_encode(["success"=>1,"bildirimler"=>$bildirimler1]);
    }
    else{
        echo json_encode(["success"=>0]);
    }
?>