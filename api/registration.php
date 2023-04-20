<?php
include('mysqli.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(isset($postdata) && !empty($postdata))
{

  $name = mysqli_real_escape_string($mysqli, trim($request->name));
  $email = mysqli_real_escape_string($mysqli, trim($request->email));
  $password = mysqli_real_escape_string($mysqli, (int)$request->password);
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


/*include('db.config.alter.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(isset($postdata) && !empty($postdata))
{
  
  $email = mysqli_real_escape_string($mysqli, trim($request->email));
  $name = mysqli_real_escape_string($mysqli, trim($request->name));
  $password = mysqli_real_escape_string($mysqli, (int)$request->password);
  $role = mysqli_real_escape_string($mysqli, trim($request->role));
  echo $email;
  $sql = "INSERT INTO user (name, email, password, role) VALUES ('{$name}', '{$email}', '{$password}','{$role}')";
  echo $sql;
if ($mysqli->query($sql) === TRUE) { 
 
    $authdata = [
      'name' => $name,
	    'password' => '',
	    'email' => $email,
      'role' => $role,
      'user_id'    => mysqli_insert_id($mysqli)
    ];
    echo json_encode($authdata);
 
  }
}*/

?>