<p>Test</p>
<?php


mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);
$mysqli = new mysqli("example.com", "user", "password", "database");

$mysqli->query("DROP TABLE IF EXISTS test");
$mysqli->query("CREATE TABLE test(id INT)");
$mysqli->query("INSERT INTO test(id) VALUES (1), (2), (3)");

$result = $mysqli->query("SELECT id FROM test ORDER BY id ASC");

echo "Ordre inversé...\n";
for ($row_no = $result->num_rows - 1; $row_no >= 0; $row_no--) {
    $result->data_seek($row_no);
    $row = $result->fetch_assoc();
    echo " id = " . $row['id'] . "\n";
}

echo "Ordre du jeu de résultats...\n";
foreach ($result as $row) {
    echo " id = " . $row['id'] . "\n";
}



function delete_plat_by_id($id)
    {
      $pdo = getConnectBdd();
      $req = "DELETE FROM platGallery WHERE platGallery_id = :platGallery_id";
      $stmt=$pdo->prepare($req);
      $stmt->bindParam(':platGallery_id', $platGallery_id, PDO::PARAM_INT);
      $stmt->execute();
      return $stmt->fetch(PDO::FETCH_OBJ);
    }



function deletetest($id){

        $pdo = getConnectBdd();


        if( isset( $_POST['id'] ) && is_numeric( $_POST['id'] ) && $_POST['id'] > 0 )
        {
            $id = $_POST['id'];
            $stmt = $pdo->prepare( "DELETE FROM platGallery WHERE platGallery_id = '{$id}'" );
            $stmt->bindParam(':platGallery_id', $id);
            $stmt->execute();
            if( ! $stmt->rowCount() ) echo "Deletion failed";
        }
        else
        {
            echo "ID must be a positive integer";
        }
    }
    
    





function delagain() {

    include('db.config.php');
 
$message = '';
 
$data = json_decode(file_get_contents("php://input"));
 
$query = "DELETE FROM platGallery WHERE id = '".$data->id."'";
 
$statement = $connect->prepare($query);
if($statement->execute())
{
 $message = 'Data Deleted';
}
 
$output = array(
 'message' => $message
);
 
echo json_encode($output);

}



function updatePlat2(){
    include('mysqli.php');


// Get the posted data.
$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata))
{

  $request = json_decode($postdata);
	
  // Validate.
if ((int)$request->platGallery_id < 1 || trim($request->picture) == '' || trim($request->name) == '') {
    return http_response_code(400);
}
    
  // Sanitize.
  $id = mysqli_real_escape_string($mysqli, (int)$request->platGallery_id);
  $picture = mysqli_real_escape_string($mysqli, trim($request->picture));
  $name = mysqli_real_escape_string($mysqli, trim($request->name));

  // Update.
  $sql = "UPDATE `platGallery` SET `picture`='$picture',`name`='$name' WHERE `platGallery_id` = '{$id}' LIMIT 1";

  if($mysqli->query($sql) === TRUE)
  {
    http_response_code(204);
  }
  else
  {
    return http_response_code(422);
  }  
}
}