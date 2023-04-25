<?php
include('db.config.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");




define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS'])? "https":"http").
"://".$_SERVER['HTTP_HOST'].$_SERVER["PHP_SELF"]));






function getPlatGalleryList() {
    $pdo = getConnectBdd();
    $req = "SELECT * FROM platGallery";
    //$req = "SELECT p.platGallery_id, p.picture, p.name, categories.title
    //FROM platGallery p JOIN categories ON category_id = categories.id";
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
    //$req = "SELECT p.platGallery_id, p.picture, p.name, categories.title
   // FROM platGallery p JOIN categories ON category_id = categories.id
    //WHERE p.platGallery_id = :id";
    $req = "SELECT p.platGallery_id, p.picture, p.name FROM platGallery p WHERE p.platGallery_id = :id";
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
