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