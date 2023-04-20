<?php
include('db.config.php');


header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');

define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS'])? "https":"http").
"://".$_SERVER['HTTP_HOST'].$_SERVER["PHP_SELF"]));


/*
// connect to the bookdb database
$pdo = getConnectBdd();

$publisher = [
	'publisher_id' => 1,
	'name' => 'McGraw-Hill Education'
];

$sql = 'UPDATE platGallery 
        SET picture = :picture, name = :name, category_id = :category_id 
        WHERE platGallery_id = :platGallery_id';

// prepare statement
$statement = $pdo->prepare($sql);

// bind params
$statement->bindParam(':publisher_id', $publisher['publisher_id'], PDO::PARAM_INT);
$statement->bindParam(':name', $publisher['name']);

// execute the UPDATE statment
if ($statement->execute()) {
	echo 'The publisher has been updated successfully!';
}

*/



// CODE ALTER

if($_POST){
    
    include('db.config.alter.php');
    


    try{
 
    $sql = 'UPDATE platGallery 
                SET picture = :picture, name = :name, category_id = :category_id 
                 WHERE platGallery_id = :platGallery_id';
    
    // prepare query for excecution
    $stmt = $pdo->prepare($sql);

    
    // posted values
    $platGallery_id = $_POST['platGallery_id'];
    $picture = $_POST['picture'];
    $name = $_POST['name'];
    $category_id = $_POST['category_id'];
    
    // bind the parameters
    $stmt->bindParam(':platGallery_id', $platGallery_id);
    $stmt->bindParam(':picture', $picture);
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':category_id', $category_id);
    
    
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















?>

