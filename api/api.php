<?php

header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');


define("URL", str_replace("index.php","",(isset($_SERVER['HTTPS'])? "https":"http").
"://".$_SERVER['HTTP_HOST'].$_SERVER["PHP_SELF"]));





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
    for($i=0; $i< count($user); $i++){
        $user[$i]['picture'] = URL."images/".$user[$i]['picture'];
    }
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



function getConnectBdd() {
    $password='alexan971';
    $user = 'copol_';
    $bddName = 'copol_ecf';
    $hostName = 'mysql-copol.alwaysdata.net';
    return new PDO("mysql:host=mysql-copol.alwaysdata.net;dbname=$bddName", $user, $password);
}







/*

header('Access-Control-Allow-Headers: Access-Control-Allow-Origin, Content-Type');
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json, charset=utf-8');


// grab JSON data sent by Angular
$data = json_decode(file_get_contents('php://input'), true);
// add numeric data
$data["prop3"] = 3;
// reply
echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_NUMERIC_CHECK);




getPlatGaleryList (): Observable<PlatGalery[]> {
    return this.http.get<PlatGalery[]>('api/platgalery').pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, []))
      );
  }



  getPlatGaleryById (platGaleryId: number) : Observable<PlatGalery | undefined> {
    return this.http.get<PlatGalery>(`api/platgalery/${platGaleryId}`).pipe(
      tap((response)=> this.log(response)),
      catchError((error) => this.handleError(error, undefined))
      );
  }*/