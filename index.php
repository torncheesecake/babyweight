<?php
ini_set('display_errors', 1);


$servername = "localhost";
$username = "secret";
$password = "secret";
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
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title></title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Weight Converter / Tracker</h1>
                <h2>Converst Kg to Lbs &amp; Oz</h2>
            </div>
        </div>
    </div>
    <hr />
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <form>
                    <div class="form-group">
                        <label for="childNameLabel">Child Name</label>
                        <select name="childName" id="childName" class="form-control">
                          <option value="Oliver" selected="True">Oliver</option>
                          <option value="Ethan">Ethan</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="weightInKgLabel">Weight in Kg</label>
                        <input type="text" id="weightInKg" class="form-control" />
                    </div>
                    <input type="button" id="addButton" value="Add" onsubmit="clearField()" class="btn btn-primary" />
                </form>
                <br />
                <p id="pResults">&nbsp;</p>
            </div>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>

    <script src="weightconversion.js"></script>
</body>

</html>
