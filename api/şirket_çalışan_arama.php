<?php
    // Gelen veriyi veritabanında arayacağız ve döndüreceğiz geriye.
    require 'config.php'; 
    $datas = json_decode(file_get_contents("php://input"));

    // gelen veriyi sorgula veritabanında sonuçları geri döndür
    $searchText = $datas->arama->searchText1;
      
    $userData ='';
    $query_işçi = "SELECT * FROM `işçi`
    WHERE `işçi_adı` LIKE '%{$searchText}%'";
    $result_işçi = $db->query($query_işçi);

    $query_işveren = "SELECT * FROM `işveren`
    WHERE `şirket_adı` LIKE '%{$searchText}%'";
    $result_işveren = $db->query($query_işveren);

    $tüm_sonuçlar_işveren = mysqli_fetch_all($result_işveren,MYSQLI_ASSOC);
    $tüm_sonuçlar_işçi = mysqli_fetch_all($result_işçi,MYSQLI_ASSOC);

    echo json_encode(["sonuç_işveren"=>$tüm_sonuçlar_işveren, "sonuç_işçi"=>$tüm_sonuçlar_işçi]);
    
?>