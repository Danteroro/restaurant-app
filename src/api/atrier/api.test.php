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


function createUser() {
    
     include('mysqli.php');

    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    if(isset($postdata) && !empty($postdata))
    {
    
      $name = mysqli_real_escape_string($mysqli, trim($request->name));
      $email = mysqli_real_escape_string($mysqli, trim($request->email));
      $password = mysqli_real_escape_string($mysqli, trim($request->password));
      $role = mysqli_real_escape_string($mysqli, trim($request->role));
      $sql = "INSERT INTO user (name, email, password, role) VALUES ('{$name}', '{$email}', '{$password}','{$role}')";
    
    if ($mysqli->query($sql) === TRUE) { 
     
        $authdata = [
          'user_id' => mysqli_insert_id($mysqli),
          'name' => $name,
          'email' => $email,
            'password' => '',
          'role' => $role
          
        ];
        echo json_encode($authdata);
     
      }
    }

}


function create() {


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
    
}




function update() {
    
  include('mysqli.php');
  $postdata = file_get_contents("php://input");
   
  $request = json_decode($postdata);
  if(isset($postdata) && !empty($postdata))
  {
   
    $id= mysqli_real_escape_string($mysqli, (int)$request->id);
   // $id = mysqli_real_escape_string($mysqli, trim($request->id));
    echo $id;
  
    
    $picture = mysqli_real_escape_string($mysqli, trim($request->picture));
    $name = mysqli_real_escape_string($mysqli, trim($request->name));
   
    $sql = "UPDATE platGallery SET picture='$picture',name='$name' where platGallery_id=$id";
   //echo $sql;
  if ($mysqli->query($sql) === TRUE) {
   
   
      $authdata = [
        'Id'    => '',
        'picture' => $picture,
        'name' => $name
  
      
      
        
      ];
      echo json_encode($authdata);
   
    }
}



   /* try{
    $pdo = getConnectBdd();
    $sql = 'UPDATE platGallery SET picture = :picture, name = :name WHERE platGallery_id = :platGallery_id';
    
    // prepare query for excecution
    $stmt = $pdo->prepare($sql);

    
    // posted values
    $platGallery_id = $_POST['platGallery_id'];
    $picture = $_POST['picture'];
    $name = $_POST['name'];
    
    // bind the parameters
    $stmt->bindParam(':platGallery_id', $platGallery_id);
    $stmt->bindParam(':picture', $picture);
    $stmt->bindParam(':name', $name);
    
    
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
    }*/

        
};




function delete() {

include('mysqli.php');
$_SERVER['QUERY_STRING'];
$id=$_GET["id"];
var_dump($_GET);
var_dump('dhvodshvnm');
var_dump($_SERVER['QUERY_STRING']);


if($_GET["id"] !="")
{
 
$id= 13;
var_dump($id);
 
  $sql = "DELETE FROM platGallery  WHERE platGallery_id = '{$id}' LIMIT 1";
 
  if(mysqli_query($mysqli, $sql))
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}





 /*     
include('db.config.alter.php');


$postdata = file_get_contents("http://localhost/restaurant-app/api/home");
$request = json_decode($postdata);

    if(isset($request->id)){
        $message ['message' ] = '' ;
        $platGallery_id = $request->platGallery_id;
        var_dump($platGallery_id);
  
        //DELETE POST BY ID FROM DATABASE
        $req = "DELETE FROM platGallery WHERE platGallery_id = :platGallery_id";
        $statement = $pdo->prepare($req);
        $statement->bindParam(':platGallery_id', $platGallery_id, PDO::PARAM_INT);
        
        if($statement->execute()){
            $msg['message'] = 'Post Deleted Successfully';
        }else{
            $msg['message'] = 'Post Not Deleted';
        }
   }

  
 
   
   $pdo = getConnectBdd();
   $platGallery_id = ($_GET['id']);
   var_dump($platGallery_id);


    $req = "DELETE FROM platGallery WHERE platGallery_id = :platGallery_id";
    $statement = $pdo->prepare($req);
    $statement->bindParam(':platGallery_id', $platGallery_id, PDO::PARAM_INT);
    if ($statement->execute()) {
	echo 'platGallery id' . $platGallery_id . ' was deleted successfully.';
    }
    $statement->closeCursor();
    sendJSON($platGallery_id);*/

/*
    include('db.config.alter.php');

   try {
    
       /* if (!isset($_GET['id'])) {
            exit;
         }*/
/*
        $id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($db, (int)$_GET['id']) : false;
        // get record ID
        // isset() is a PHP function used to verify if a value is there or not
        echo $id;
        echo ('test');
        
        // delete query
        $req = "DELETE FROM platGallery WHERE platGallery_id = ?";
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
