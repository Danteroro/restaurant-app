<?php
include('mysqli.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);



if($_GET["id"] !="")
{
 $id=$_GET["id"];
 
  $sql = "DELETE FROM platGallery  WHERE platGallery_id = '{$id}' LIMIT 1";
 
  if(mysqli_query($mysqli, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}


?>








