<?php
    // Gelen veriyi veritabanında arayacağız ve döndüreceğiz geriye.
    require 'config.php'; 
    $datas = json_decode(file_get_contents("php://input"));

    // gelen veriyi sorgula veritabanında sonuçları geri döndür
    $dosya = $datas->dosya;
    $filepath = "uploads/" . $dosya;

    header('Content-Description: File Transfer');
            header('Content-Type: application/octet-stream');
            header('Content-Disposition: attachment; filename="'.basename($filepath).'"');
            header('Expires: 0');
            header('Cache-Control: must-revalidate');
            header('Pragma: public');
            header('Content-Length: ' . filesize($filepath));
            flush(); // Flush system output buffer
            readfile($filepath);
    
?>