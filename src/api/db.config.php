<?php

function getConnectBdd() {

    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Content-Type: application/json; charset=UTF-8");
    
   
    
    $password='alexan971';
    $user = 'copol_';
    $bddName = 'copol_ecf';
    $hostName = 'mysql-copol.alwaysdata.net';
    return new PDO("mysql:host=$hostName;dbname=$bddName", $user, $password);
}

?>