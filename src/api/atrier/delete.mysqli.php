<?php
include('mysqli.php');



// Extract, validate and sanitize the id.
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($mysqli, (int)$_GET['platGallery_id']) : false;

if(!$id)
{
  return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM platGallery WHERE platGallery_id ='{$id}' LIMIT 1";

if(mysqli_query($mysqli, $sql))
{
  http_response_code(204);
}
else
{
  return http_response_code(422);
}

//$sql = "DELETE FROM `platGallery` WHERE `id` ='{$id}' LIMIT 1";
//$sql = "INSERT INTO user (name, email, password, role) VALUES ('{$name}', '{$email}', '{$password}','{$role}')";
















/*
// Create connection
include('mysqli.php');

// Check connection
if ($mysqli->connect_error) {
  die("Connection failed: " . $mysqli->connect_error);
}

// sql to delete a record


$sql = "DELETE FROM platGallery WHERE platGallery_id = '".mysqli_escape_string($mysqli, (int)$_REQUEST["platGallery_id"])."'";
var_dump($sql);

if ($mysqli->query($sql) === TRUE) {
  echo "Record deleted successfully";
} else {
  echo "Error deleting record: " . $mysqli->error;
}

$mysqli->close();*/
?>
