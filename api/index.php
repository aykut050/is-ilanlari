<?php 

$type = $_GET['tp']; 
if($type=='signup_işçi') signup_işçi(); 
elseif($type=='login_işçi') login_işçi();
elseif($type=='signup_işveren') signup_işveren();
elseif($type=='login_işveren') login_işveren(); 
elseif($type=='login_admin') login_admin();

function login_işçi() { 
    require 'config.php';     
    require "../vendor/autoload.php";
    $json = json_decode(file_get_contents('php://input'), true); 
    $username = $json['username'];
    $password = $json['password']; 
    $userData ='';
    $query = "select * from işçi where işçi_kullanıcı_adi='$username' and işçi_şifre='$password'"; 
    $result= $db->query($query);
    $rowCount=$result->num_rows;
          
     if($rowCount>0)
     { 
        $userData = $result->fetch_object();
        $userData = json_encode($userData);
        echo '{"userData":'.$userData.'}';
     }
}

function signup_işçi() {
    
    require 'config.php';

          
    $json = json_decode(file_get_contents('php://input'), true);
    $username = $json['username'];
    $password = $json['password'];

   
    if (strlen(trim($username))>0 && strlen(trim($password))>0 )
    {
        $userData = '';
            
            $result = $db->query("select * from işçi where işçi_kullanıcı_adi='$username'");
            $rowCount=$result->num_rows;
            //echo '{"text": "'.$rowCount.'"}';
           
            if($rowCount==0)
            {
                                
                $db->query("INSERT INTO işçi(işçi_kullanıcı_adi,işçi_şifre)
                            VALUES('$username','$password')");

                $userData ='';
                $query = "select * from işçi where işçi_kullanıcı_adi='$username' and işçi_şifre='$password'";
                $result= $db->query($query);
                $userData = $result->fetch_object();
                $işçi_id=$userData->işçi_id;
                $userData = json_encode($userData);
                echo '{"userData":'.$userData.'}';
            } 
          
        }
     

}

function signup_işveren() {
    
    require 'config.php';
          
    $json = json_decode(file_get_contents('php://input'), true);
    $username = $json['username'];
    $password = $json['password'];

    
    if (strlen(trim($username))>0 && strlen(trim($password))>0 )
    {
        $userData = '';
            
            $result = $db->query("select * from işveren where işveren_kullanıcı_adı='$username'");
            $rowCount=$result->num_rows;
            //echo '{"text": "'.$rowCount.'"}';
           
            if($rowCount==0)
            {     
                $db->query("INSERT INTO işveren(işveren_kullanıcı_adı,işveren_şifre)
                            VALUES('$username','$password')");
                $userData ='';
                $query = "select * from işveren where işveren_kullanıcı_adı='$username' and işveren_şifre='$password'";
                $result= $db->query($query);
                $userData = $result->fetch_object();
                $işveren_id=$userData->işveren_id;
                $userData = json_encode($userData);
                echo '{"userData":'.$userData.'}';
            } 
          
        }
       
}

function login_işveren() { 
    require 'config.php'; 
    $json = json_decode(file_get_contents('php://input'), true); 
    $username = $json['username'];
    $password = $json['password']; 
    $userData ='';
    $query = "select * from işveren where işveren_kullanıcı_adı='$username' and işveren_şifre='$password'"; 
    $result= $db->query($query);
    $rowCount=$result->num_rows;
          
    if($rowCount>0)
    {
        $userData = $result->fetch_object();
        $işçi_veren=$userData->işveren_id;
        $userData = json_encode($userData);
        echo '{"userData":'.$userData.'}';
    }
   
}

function login_admin() { 
    require 'config.php'; 
    $json = json_decode(file_get_contents('php://input'), true); 
    $username = $json['username'];
    $password = $json['password']; 
    $userData ='';
    $query = "select * from admin where admin_kullanıcı_adı='$username' and admin_şifre='$password'"; 
    $result= $db->query($query);
    $rowCount=$result->num_rows;
          
    if($rowCount>0)
    {
        $userData = $result->fetch_object();
        $userData = json_encode($userData);
        echo '{"userData":'.$userData.'}';
    }
    
}

?>