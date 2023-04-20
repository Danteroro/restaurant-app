<?php
include('db.config.php');


header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');

define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS'])? "https":"http").
"://".$_SERVER['HTTP_HOST'].$_SERVER["PHP_SELF"]));


function createUser() {
 
}


function createPlat() {
    $pdo = getConnectBdd();
    $req = "INSERT INTO platGallery SET picture=:picture, name=:name, category_id=:category_id";
    $stmt = $pdo->prepare($req);
  
    // posted values
    
    $picture= $_POST['picture'];
    $name = $_POST['name'];
    $category_id = $_POST['category_id'];
  
    // bind the parameters
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

function updatePlat() {
    
    try{
    $pdo = getConnectBdd();
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

        
};


function delPlat() {
    
    $platGallery_id = $_GET['platGallery.platGallery_id'];
    var_dump($_GET);
    //$platGallery_id = 25;
    echo $platGallery_id;
    $pdo = getConnectBdd();

    $req = "DELETE FROM platGallery WHERE platGallery.platGallery_id = :platGallery_id";
    $statement = $pdo->prepare($req);
    $statement->bindParam(':platGallery_id', $platGallery_id, PDO::PARAM_INT);
    if ($statement->execute()) {
	echo 'platGallery id' . $platGallery_id . ' was deleted successfully.';
    }
    $statement->closeCursor();
    sendJSON($platGallery_id);




  /*  try {
	
        include('db.config.alter.php');
        
        // get record ID
        // isset() is a PHP function used to verify if a value is there or not
        $id=isset($_GET['id']) ? $_GET['id'] : die('ERROR: Record ID not found.');
        echo $id;
        // delete query
        $req = "DELETE FROM platGallery WHERE platGallery.platGallery_id = :platGallery_id";
        $stmt = $pdo->prepare($req);
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
        */

}


function getPlatGaleryList() {
    $pdo = getConnectBdd();
    $req = "SELECT p.platGallery_id, p.picture, p.name, categories.title
    FROM platGallery p JOIN categories ON category_id = categories.id";
    $stmt = $pdo->prepare($req);
    $stmt->execute();
    $platGallery = $stmt->fetchAll(PDO::FETCH_ASSOC);
    for($i=0; $i< count($platGallery); $i++){
        $platGallery[$i]['picture'] = URL."images/".$platGallery[$i]['picture'];
    }
    $stmt->closeCursor();
    sendJSON($platGallery);
    
}



function getEntreeList() {
    $pdo = getConnectBdd();
    $req = "SELECT e.entree_id, e.picture, e.title, e.description, e.price
    FROM entree as e";
    $stmt = $pdo->prepare($req);
    $stmt->execute();
    $entree = $stmt->fetchAll(PDO::FETCH_ASSOC);
    for($i=0; $i< count($entree); $i++){
        $entree[$i]['picture'] = URL."images/".$entree[$i]['picture'];
    }
    $stmt->closeCursor();
    sendJSON($entree);
    

}

function getPlatList() {
    $pdo = getConnectBdd();
    $req = "SELECT p.plat_id, p.picture, p.title, p.description, p.price
    FROM plat as p";
    $stmt = $pdo->prepare($req);
    $stmt->execute();
    $plat = $stmt->fetchAll(PDO::FETCH_ASSOC);
    for($i=0; $i< count($plat ); $i++){
        $plat [$i]['picture'] = URL."images/".$plat [$i]['picture'];
    }
    $stmt->closeCursor();
    sendJSON($plat);
    

}

function getDessertList() {
    $pdo = getConnectBdd();
    $req = "SELECT d.dessert_id, d.picture, d.title, d.description, d.price
    FROM dessert as d";
    $stmt = $pdo->prepare($req);
    $stmt->execute();
    $dessert = $stmt->fetchAll(PDO::FETCH_ASSOC);
    for($i=0; $i< count($dessert); $i++){
        $dessert[$i]['picture'] = URL."images/".$dessert[$i]['picture'];
    }
    $stmt->closeCursor();
    sendJSON($dessert);
    

}

function getMenuList() {
    $pdo = getConnectBdd();
    $req = "SELECT* FROM menu";
    $stmt = $pdo->prepare($req);
    $stmt->execute();
    $menu = $stmt->fetchAll(PDO::FETCH_ASSOC);
    for($i=0; $i< count($menu); $i++){
        $menu[$i]['picture'] = URL."images/".$menu[$i]['picture'];
    }
    $stmt->closeCursor();
    sendJSON($menu);
    

}

function getHoraireList() {
    $pdo = getConnectBdd();
    $req = "SELECT* FROM horaire";
    $stmt = $pdo->prepare($req);
    $stmt->execute();
    $horaire = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    sendJSON($horaire);  
}


function getUsersList() {
    $pdo = getConnectBdd();
    $req = "SELECT* FROM user";
    $stmt = $pdo->prepare($req);
    $stmt->execute();
    $user = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $stmt->closeCursor();
    sendJSON($user);
    

}


function getPlatGaleryById($id) {
    $pdo = getConnectBdd();
    $req = "SELECT p.platGallery_id, p.picture, p.name, categories.title
    FROM platGallery p JOIN categories ON category_id = categories.id
    WHERE p.platGallery_id = :id";
    $stmt = $pdo->prepare($req);
    $stmt->bindValue(":id",$id, PDO::PARAM_INT);
    $stmt->execute();
    $platGallery = $stmt->fetch(PDO::FETCH_ASSOC);
    $platGallery['picture'] = URL."images/".$platGallery['picture'];
    $stmt->closeCursor();
    sendJSON($platGallery);
}



function sendJSON($infos){
    header('Acces-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    echo json_encode($infos, JSON_UNESCAPED_UNICODE);
}
