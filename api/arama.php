<?php
    // Gelen veriyi veritabanında arayacağız ve döndüreceğiz geriye.
    require 'config.php'; 
    $datas = json_decode(file_get_contents("php://input"));

    // gelen veriyi sorgula veritabanında sonuçları geri döndür
    $searchText = $datas->arama->searchText1;
      
    $userData ='';
    $query = "SELECT * FROM `iş_ilanı` WHERE `unvan` LIKE '%{$searchText}%'";
    $result = $db->query($query);
    $all_ilan = mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode(["ilan"=>$all_ilan]);
    
?>