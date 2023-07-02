<?php 
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

$password='alexan971';
$user = 'copol_';
$bddName = 'copol_ecf';
$hostName = 'mysql-copol.alwaysdata.net';
$pdo = new PDO("mysql:host=mysql-copol.alwaysdata.net;dbname=$bddName", $user, $password);
$_POST = json_decode(file_get_contents('php://input'), true); 


if(!empty($_POST['value'])) {

    $req = "DELETE FROM platGallery WHERE platGallery_id = :platGallery_id";
    $statement = $pdo->prepare($req);
    $statement->bindParam(':platGallery_id', $_POST['value'], PDO::PARAM_INT);
    if ($statement->execute()) {
	echo 'platGallery id' . $platGallery_id . ' was deleted successfully.';
    }

}
/*include('mysqli.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

if(isset($postdata) && !empty($postdata))
{

  $id = mysqli_real_escape_string($mysqli, (int)$request->platGallery_id);
  $sql = "DELETE FROM platGallery WHERE platGallery_id = {$id}";

if ($mysqli->query($sql) === TRUE) { 
 
    $authdata = [
    //  'platGallery_id' => mysqli_insert_id($mysqli),
      'platGallery_id' => $id,
    ];
    echo json_encode($authdata);
 
  }
}*/


/*


}*/
