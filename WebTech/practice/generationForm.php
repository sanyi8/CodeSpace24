<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];

//Show generation based on age
if ($age >= 1928 && $age <= 1945){
    $generation = "Silent Generation";
} elseif ($age >= 1946 && $age <= 1964){
    $generation = "Baby Boomer";
} elseif ($age >= 1965 && $age <= 1980){
    $generation = "Gen X";
} elseif ($age >= 1981 && $age <= 1996){
    $generation = "Millenial";
} elseif ($age >= 1997 && $age <= 2012){
    $generation = "Gen Z";
} elseif ($age >= 2012 && $age <= 2025){
    $generation = "Gen Alpha";
} else {
    $generation = "Your generation not yet labeled"
}
   
   // do something with the form data, such as storing it in a database or sending an email
   
    echo "Thank you $name for submitting the form!" <br>;
    echo "You are part of $generation generation";
} else {
    // the form wasn't submitted properly
    echo "There was an error submitting the form.";
}
?>



<!--HTML part-->

<!DOCTYPE html>
<html>
<head>
    <title>PHP Form - GenerationByAge</title>
</head>
<body>
    <h2>PHP Form Example</h2>
    <form action="process.php" method="POST">
        <label for="name">Name:</label>
        <input type="text" name="name" id="name">
        <br><br>
        <label for="email">Email:</label>
        <input type="email" name="email" id="email">
        <br><br>
        <label for="age">Year of Birth:</label>
        <input type="number" name="age" id="age" min="1928">
        <input type="submit" value="Submit">
    </form>
</body>
</html>