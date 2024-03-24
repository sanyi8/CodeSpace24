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