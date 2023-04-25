
<?php
include('mysqli.php');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);


if(isset($postdata) && !empty($postdata))
{
  
  $id= mysqli_real_escape_string($mysqli, (int)$request->resa_id);
  $name = mysqli_real_escape_string($mysqli, trim($request->name));
  $email = mysqli_real_escape_string($mysqli, trim($request->email));
  $covered= mysqli_real_escape_string($mysqli, (int)$request->covered);
  //$date = mysqli_real_escape_string($mysqli, date("j/m/y"));
  $date = date('d-m-Y', strtotime($_POST['date']));
  var_dump($date);
  $infos = mysqli_real_escape_string($mysqli, trim($request->infos));
  $sql = "INSERT INTO reservation (name, email, covered, date, infos) VALUES ('{$name}', '{$email}', '{$covered}','{$date}', '{$infos}')";

if ($mysqli->query($sql) === TRUE) { 
 
    $authdata = [

      'resa_id' => mysqli_insert_id($mysqli),
      'name' => $name,
      'email' => $email,
	    'covered' => $covered,
      'date' => $date,
      'infos' => $infos
      
    ];
    echo json_encode($authdata);
 
  }
}

 //list($m,$d,$y) = explode("/",$_POST['date']);
 //$data = mysqli_real_escape_string($bd, date("j/m/y"));
  //$date = mysqli_real_escape_string($mysqli, trim($request->date));
  //$date = mysql_real_escape_string("$y-$m-$d ".$_POST['time']);
  //$date = mysqli_real_escape_string($mysqli, date('Y-m-d', strtotime(str_replace('-','/',$_POST['purchase_date']));
//$warranty_end_date = mysqli_real_escape_string($mysqli, date('Y-m-d', strtotime(str_replace('-','/',$_POST['warranty_end_date']));

?>

