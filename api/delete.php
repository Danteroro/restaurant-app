<?php
include('db.config.php');


header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');

define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS'])? "https":"http").
"://".$_SERVER['HTTP_HOST'].$_SERVER["PHP_SELF"]));


/*
$platGallery_id = $_GET['platGallery_id'];
$pdo = getConnectBdd();
// construct the delete statement
//$sql = 'DELETE FROM publishers WHERE publisher_id = :publisher_id';
$req = "DELETE FROM platGallery WHERE platGallery.platGallery_id = :platGallery_id";

// prepare the statement for execution
$statement = $pdo->prepare($req);
$statement->bindParam(':platGallery_id', $platGallery_id, PDO::PARAM_INT);

// execute the statement
if ($statement->execute()) {
	echo 'platGallery id' . $platGallery_id . ' was deleted successfully.';
}
*/


// CODE ALTER

// include database connection

try {
	
include('db.config.alter.php');
// get record ID
// isset() is a PHP function used to verify if a value is there or not
$id=isset($_GET['platGallery_id']) ? $_GET['platGallery_id'] : die('ERROR: Record ID not found.');

// delete query
$req = "DELETE FROM platGallery WHERE platGallery.platGallery_id = :platGallery_id";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(1, $id);
echo $id;

if($stmt->execute()){
// redirect to read records page and
// tell the user record was deleted
echo json_encode(array('result'=>'success'));
}else{
echo json_encode(array('result'=>'fail'));
}
}

// show error
catch(PDOException $exception){
die('ERROR: ' . $exception->getMessage());
}










?>