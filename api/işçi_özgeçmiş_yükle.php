<?php 
        require 'config.php'; 

        

$response = array();
$dosya = dirname( dirname(__FILE__) );
echo $dosya;
$upload_dir = $dosya .'/client/is-ilanlari/public/uploads/';
echo $upload_dir;

if($_FILES['avatar'])
{        
    $işçi_id = $_POST["işçi_id"];
    $_FILES["avatar"]["name"] = $_POST["avatar1"];
    $avatar_name = $_FILES["avatar"]["name"];
    $avatar_tmp_name = $_FILES["avatar"]["tmp_name"];
    $error = $_FILES["avatar"]["error"];

    if($error > 0){
        $response = array(
            "status" => "error",
            "error" => true,
            "message" => "Error uploading the file!"
        );
    }else 
    {
        
        $upload_name = $upload_dir.strtolower($avatar_name);
        //$upload_name = preg_replace('/\s+/', '-', $upload_name);

        if(move_uploaded_file($avatar_tmp_name , $upload_name)) {
            $query = "UPDATE `işçi` SET 
            `özgeçmiş_dosya`='$avatar_name' WHERE `işçi_id`='$işçi_id'";  
               //sorguyu çalıştır
           $result = $db->query($query);
            $response = array(
                "status" => "success",
                "error" => false,
                "message" => "File uploaded successfully",
                "id" => $işçi_id
              );
        } else
        {
            $response = array(
                "status" => "error",
                "error" => true,
                "message" => "Error uploading the file!"
            );
        }
    }

}else{
    $response = array(
        "status" => "error",
        "error" => true,
        "message" => "No file was sent!"
    );
}

echo json_encode($response);
?>