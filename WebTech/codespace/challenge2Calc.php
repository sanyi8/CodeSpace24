<?php

//add the submit button and post
if (isset($_POST['num1']) && isset($_POST['num2']) && isset($_POST['operator'])) {

//add main elements for numbers and operations super globals
$num1 = $_POST['num1'];
$num2 = $_POST['num2'];
$operator = $_POST['operator'];


//switch statement to use selected operation based on this tut: https://tutorialsclass.com/exercise/simple-calculator-program-in-php/

switch ($operator) {
    case 'addition':
        $result = $num1 + $num2;
        break;
    case 'substract':
        $result = $num1 - $num2;
        break;
    case 'multiply':
        $result = $num1 * $num2;
        break;
    case 'divide':
        $result = $num1 / $num2;
        break;
    default:
    $result = "Invalid operatior";
            
}

// write the result in a paragraph
echo "<p>The result for $num1 and $num2 is: $result</p>";
}

?>

<!-- x + y: Adds the values of variables x and y.
5 - 2: Subtracts 2 from 5.
3 * 4: Multiplies 3 and 4.
10 / 2: Divides -->