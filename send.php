<?php
ini_set('display_errors', 1);


$servername = "";
$username = "";
$password = "";
$database = "";

//Create connection
$mysqli = new mysqli($servername, $username, $password, $database);

//Check connection
/* check connection */
if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

//$jsonString = '{"date": "2017-04-27", "child": "Oliver", "weight": "16lbs 4oz"}'; //This works
$jsonString = file_get_contents('php://input');;
$data = json_decode($jsonString, true);

/* create a prepared statement */
if ($stmt = $mysqli->prepare('INSERT INTO babytracker (date, child, weight) VALUES (?,?,?)')) {

    /* bind parameters for markers */
    $stmt->bind_param("sss", $data['date'], $data['child'], $data['weight']);

    /* execute query */
    $stmt->execute();
    echo "Data sent";

    /* close statement */
    $stmt->close();
}

$mysqli->close();
?>
