<?php

// check if form was submitted
if($_POST){
    include 'config/database.php';
    try{
 
    $query = "UPDATE products 
                        SET p_name=:name, p_description=:description, p_price=:price 
                        WHERE p_id = :id";
    
    // prepare query for excecution
    $stmt = $con->prepare($query);
    
    // posted values
    $id = $_POST['id'];
    $name = $_POST['name'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    
    // bind the parameters
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':price', $price);
    $stmt->bindParam(':id', $id);
    
    // Execute the query
    if($stmt->execute()){
    echo json_encode(array('result'=>'success'));
    }else{
    echo json_encode(array('result'=>'fail'));
    }
    
    }
    
    // show errors
    catch(PDOException $exception){
    die('ERROR: ' . $exception->getMessage());
    }
    }
    ?>

    
<?php
include('db.config.alter.php');

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
$id=isset($_GET['id']) ? $_GET['id'] : die('ERROR: Record ID not found.');

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