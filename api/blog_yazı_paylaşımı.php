<?php
    // Gelen veriyi veritabanında arayacağız ve döndüreceğiz geriye.
    require 'config.php'; 
    $datas = json_decode(file_get_contents("php://input"));

    // gelen veriyi sorgula veritabanında sonuçları geri döndür
    $yazı = $datas->blogYazı->yazı;
    $yazıBaşlık = $datas->blogYazı->yazıBaşlık;

    $yazı = trim($yazı);
    $yazıBaşlık = trim($yazıBaşlık);

    if(strlen($yazı)>0 && strlen($yazıBaşlık)){
        $query = "INSERT INTO blog_yazı(yazı, yazı_başlık, yayın_tarihi)
        VALUES('$yazı','$yazıBaşlık',now())";  
            $result = $db->query($query);
    }
    else{
        echo "Bir veri girmelisiniz.";
    }

?>