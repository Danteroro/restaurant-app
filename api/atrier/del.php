<?php
include('db.config.alter.php');


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

    if(isset($request->id )){
        $message ['message' ] = '' ;
        $id = $request -> id ;
  
        //DELETE POST BY ID FROM DATABASE
        $delete_post = "DELETE FROM platGallery WHERE platGallery_id= :platGallery_id";
        $delete_post_stmt = $pdo->prepare($delete_post);
        $delete_post_stmt->bindValue(':platGallery_id', $platGallery_id,PDO::PARAM_INT);
        
        if($delete_post_stmt->execute()){
            $msg['message'] = 'Post Deleted Successfully';
        }else{
            $msg['message'] = 'Post Not Deleted';
        }
   }

/*code alter
include('mysqli.php');

$postdata = file_get_contents("http://localhost/restaurant-app/api/home");
$request = json_decode($postdata);

if(isset($postdata) && !empty($postdata)){

    $platGallery_id = mysqli_real_escape_string($mysqli, (int)$request->platGallery_id);
    $sql = "DELETE FROM platGallery WHERE platGallery_id= {$platGallery_id}";

    if ($mysqli->query($sql) === TRUE) { 
 
        $authdata = [
          //'user_id' => mysqli_insert_id($mysqli),
          'platGallery_id' => $platGallery_id
        ];
        echo json_encode($authdata);
     
      }

}*/










   

?>