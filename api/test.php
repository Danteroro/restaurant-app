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
