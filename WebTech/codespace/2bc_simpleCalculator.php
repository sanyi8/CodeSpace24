
<!-- 2 DO THE PHP WITH OPERATION -->

<?php
// We go with everything to globally
    $error = "";
    $x = "";
    $y = "";
    $result = "";

    //assign each to the right variable
    if(isset($_GET['operation'])){
        $x = $_GET['num1'];
        $y = $_GET['num2'];
        $op = $_GET['operation'];
        
        //we check if number is numeric
        if(is_numeric($x) && is_numeric($y)){


        //assign operation to op variable
        switch($op){
            case 'add' : $result = $x + $y;
            break;
            case 'sub' : $result = $x - $y;
            break;
            case 'multi' : $result = $x * $y;
            break;
            case 'div' : $result = $x / $y;
            break;
        }

    } else {
        $error = "Enter Number First";
    }

}

?>

<!-- 1 DO THE HTML-->
<!DOCTYPE html>
<html lang="en">
<head>

    <title>PHP Calculator</title>
</head>
<body>
<!-- CHECK IF IT IS ERROR -->
    <h1><?= $error ?></h1>

    <form action="<?= $_SERVER['PHP_SELF'] ?>" method="get">
    <!-- number1 -->
    <div>
        <label for="num1">Number 1</label>
        <input type="number" name="num1" id="num1" value="<?= $x ?>">
    </div>
        <!-- number2 -->
        <div>
        <label for="num2">Number 2</label>
        <input type="number" name="num2" id="num2" value="<?= $y ?>">
    </div>

    <!--Result-->
    <div>
        <label for="result">Result</label>

        <!-- ACCESS THE RESULT TO THE VALUE: value =".code below."-->
        <input type="number" id="result" value="<?= $result ?>" disabled>
    </div>
    <!--Operation -->
    <div>
        <input type="submit" value="add" name="operation">
        <input type="submit" value="sub" name="operation">
        <input type="submit" value="multi" name="operation">
        <input type="submit" value="div" name="operation">
    </div>

    
</body>
</html>