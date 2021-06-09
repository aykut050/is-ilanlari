<?php
    require 'config.php'; 
        
    $datas = json_decode(file_get_contents("php://input"));

    $işAlanıEleman = $datas->iş_alanı_eleman->işAlanıEleman;
    
    if(isset($datas)>0){
            
    $query = "INSERT INTO iş_alanı(iş_alanı)
        VALUES('$işAlanıEleman')";  
            $result = $db->query($query);
    }
    else{
        echo "Bir veri girmelisiniz.";
    }
?>