<?php
include('db.config.php');

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS'])? "https":"http").
"://".$_SERVER['HTTP_HOST'].$_SERVER["PHP_SELF"]));

/*
// insert a single publisher
$pdo = getConnectBdd();

//$sql = 'INSERT INTO publishers(name) VALUES(:name)';
//$req = "INSERT INTO platGallery SET picture=:picture, name=:name, category_id=:category_id";
$req = "INSERT INTO platGallery 
        (name, picture, category_id) 
        VALUES (picture=:picture, name=:name, category_id=:category_id";

$statement = $pdo->prepare($req);

$statement->execute([
  ':picture' => $picture,
	':name' => $name,
  ':category_id' => $category_id
]);

$platGallery_id = $pdo->lastInsertId();

echo 'PlatGallery id' . $platGallery_id . ' was inserted';

*/



// CODE ALTER--

if($_POST){

  // include database connection
  include('db.config.php');
  
  try{
  
  // insert query  
  //$pdo = getConnectBdd();

  //$req = "INSERT INTO platGallery 
 // (name, picture, category_id) 
  //VALUES (picture=:picture, name=:name, category_id=:category_id";
  $req = "INSERT INTO platGallery SET picture=:picture, name=:name, category_id=:category_id";

  // prepare query for execution
  $stmt = $pdo->prepare($req);
  var_dump($req);

  // posted values
  $picure = $_POST['picture'];
  $name = $_POST['name'];
  var_dump($name);
  $category_id = $_POST['category_id'];

  // bind the parameters
  $stmt->bindParam(':picture', $picture);
  var_dump($picture);
  $stmt->bindParam(':name', $name);
  $stmt->bindParam(':category_id', $category_id);

  // Execute the query
  if($stmt->execute()){
  echo json_encode(array('result'=>'success'));
  }else{
  echo json_encode(array('result'=>'fail'));
  }
  }
  // show error
  catch(PDOException $exception){
  die('ERROR: ' . $exception->getMessage());
  }
  }














    

  /*if($_POST){

// include database connection
require("connectbdd.php");

try{

// insert query
//$query = "INSERT INTO products SET p_name=:name, p_description=:description, p_price=:price";
$req = "INSERT INTO platGallery SET picture=:picture, name=:name, category_id=:category_id";
// prepare query for execution
$stmt = $conn->prepare($req);
// posted values
$picture = $_POST['picture'];
$name = $_POST['name'];
$category_id = $_POST['category_id'];
// bind the parameters
$stmt->bindParam(':name', $picture);
$stmt->bindParam(':description', $name );
$stmt->bindParam(':price', $category_id);
// Execute the query
if($stmt->execute()){
echo json_encode(array('result'=>'success'));
}else{
echo json_encode(array('result'=>'fail'));
}
}
// show error
catch(PDOException $exception){
die('ERROR: ' . $exception->getMessage());
}
}*/ 
?>


