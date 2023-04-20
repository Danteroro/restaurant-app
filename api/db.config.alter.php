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

try {
 
    $pdo = new PDO("mysql:host=mysql-copol.alwaysdata.net;dbname=$bddName", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // set the PDO error mode to exception
    echo "Connected Successfully";
    
} catch(PDOException $e) {

    echo "Connection Failed" .$e->getMessage();
}

/*   header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");*/

?>