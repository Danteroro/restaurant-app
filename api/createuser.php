<?php
include('mysqli.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(isset($postdata) && !empty($postdata))
{

  $name = mysqli_real_escape_string($mysqli, trim($request->name));
  $email = mysqli_real_escape_string($mysqli, trim($request->email));
  $password = mysqli_real_escape_string($mysqli, trim($request->password));
  $role = mysqli_real_escape_string($mysqli, trim($request->role));
  $sql = "INSERT INTO user (name, email, password, role) VALUES ('{$name}', '{$email}', '{$password}','{$role}')";

if ($mysqli->query($sql) === TRUE) { 
 
    $authdata = [
      'user_id' => mysqli_insert_id($mysqli),
      'name' => $name,
      'email' => $email,
	    'password' => '',
      'role' => $role
      
    ];
    echo json_encode($authdata);
 
  }
}

?>