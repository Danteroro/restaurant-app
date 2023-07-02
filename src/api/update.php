<?php
include('mysqli.php');
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);




if(isset($postdata) && !empty($postdata))
{
 
  $id= mysqli_real_escape_string($mysqli, (int)$request->platGallery_id);
  var_dump($id);


  
  $picture = mysqli_real_escape_string($mysqli, trim($request->picture));
  var_dump($picture);
  $name = mysqli_real_escape_string($mysqli, trim($request->name));
  var_dump($name);
 
  $sql = "UPDATE platGallery SET picture='$picture',name='$name' where platGallery_id=$id";


if ($mysqli->query($sql) === TRUE) {
 
 
    $authdata = [
      
      'picture' => $picture,
      'name' => $name,
      'platGallery_id'=> ''
    
      
    ];
    echo json_encode($authdata);
    var_dump($authdata);
 
  }
}









































/*


<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
 
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
 
	$id = mysqli_real_escape_string($mysqli, trim($request->id));
	// echo $id;
  $name = mysqli_real_escape_string($mysqli, trim($request->name));
  $pwd = mysqli_real_escape_string($mysqli, (int)$request->pwd);
   $email = mysqli_real_escape_string($mysqli, trim($request->email));
  $mobile = mysqli_real_escape_string($mysqli, (int)$request->mobile);
 
  $sql = "update employee set name='$name',pwd='$pwd',email='$email',mobile='$mobile' where Id=$id";
 //echo $sql;
if ($mysqli->query($sql) === TRUE) {
 
 
    $authdata = [
      'name' => $name,
	  'pwd' => '',
	  'email' => $email,
      'mobile' => $mobile,
      'Id'    => ''
    ];
    echo json_encode($authdata);
 
}
}
?>*/




/*
include('mysqli.php');


// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{

  $request = json_decode($postdata);
	
  // Validate.
if ((int)$request->platGallery_id < 1 || trim($request->picture) == '' || trim($request->name) == '') {
    return http_response_code(400);
}
    
  // Sanitize.
  $id = mysqli_real_escape_string($mysqli, (int)$request->platGallery_id);
  $picture = mysqli_real_escape_string($mysqli, trim($request->picture));
  $name = mysqli_real_escape_string($mysqli, trim($request->name));

  // Update.
  $sql = "UPDATE `platGallery` SET `picture`='$picture',`name`='$name' WHERE `platGallery_id` = '{$id}' LIMIT 1";

  if($mysqli->query($sql) === TRUE)
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}

*/


?>