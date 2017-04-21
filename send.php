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
if(isset($_POST['myData'])){
 $obj = json_decode($_POST['myData']);
 print_r($_POST);
 //some php operation
}
?>
