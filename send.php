<?php
// $servername = "localhost";
//$username = "root";
//$password = "xteo7404Magnum26";
//$database = "babytracker";

// Create connection
//$conn = new mysqli($servername, $username, $password, $database);

// Check connection
//if ($conn->connect_error) {
//    die("Connection failed: " . $conn->connect_error);
//}
//echo "Connected successfully";
//$conn->close();
//echo "...Connection Closed";

$data = file_get_contents('weightconversion.js');
$json = json_decode($data, true);
print_r ($json);

?>
