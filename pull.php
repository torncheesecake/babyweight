<?php
ini_set('display_errors', 1);


$servername = "localhost";
$username = "root";
$password = "xteo7404Magnum26";
$database = "babytracker";

//Create connection
$mysqli = new mysqli($servername, $username, $password, $database);

//Check connection
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

$get1month = "SELECT * FROM babytracker WHERE date > DATE_SUB(NOW()), INTERVAL 1 MONTH) ORDER BY date DESC";

}

$mysqli->close();
?>
