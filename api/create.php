<?php
include('mysqli.php');



$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
	

if(isset($postdata) && !empty($postdata))
{
	
  // Sanitize.
  $picture = mysqli_real_escape_string($mysqli, trim($request->picture));
  $name = mysqli_real_escape_string($mysqli, trim($request->name));

    

  // Store.
  $sql = "INSERT INTO platGallery (picture, name) VALUES ('{$picture}', '{$name}')";

  if($mysqli->query($sql) === TRUE) {
    
    http_response_code(201);
    $platGallery = [
      'platGallery_id' => mysqli_insert_id($mysqli),
      'picture' => $picture,
      'name' => $name,
    ];
    echo json_encode($platGallery);
  }
  else
  {
    http_response_code(422);
  }
}

  ?>