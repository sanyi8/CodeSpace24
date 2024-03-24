<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];
   
   // do something with the form data, such as storing it in a database or sending an email
   
    echo "Thank you for submitting the form!";
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
        <label for="age">Age:</label>
        <input type="number" name="age" id="age" min="1928">
        <input type="submit" value="Submit">
    </form>
</body>
</html>