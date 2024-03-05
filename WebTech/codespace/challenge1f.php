<!-- Multi-Dimensional Arrays 

An array of arrays

Create and initialise an array variable using a suitable variable name to display the following of student’s results:
Name                    Physics           English       Maths

Aarron               74%                 69%            70%

Jamie                64%                 79%            69%

Harry                  55%                 52%           57% 
// create array of arrays
// access to Multidimensional array values

-->
<?php
//start with amarks than each student
$marks = array(

    "aaron" => array (
        "Physics" => '74%',
        "English" => '69%',
        "Maths" => '70%'
    ),

    "jamie" => array (
        "Physics" => '64%',
        "English" => '79%',
        "Maths" => '69%'
    ),

    "harry" => array (
        "Physics" => '55%',
        "English" => '52%',
        "Maths" => '57%'
    )
);



    echo "Results for Physics for Aaron: ";
    echo $marks['aaron']['Physics'] . "<br>";

    echo "Results for English for Jamie: ";
    echo $marks['jamie']['English'] . "<br>";

    echo "Results for Maths for Harry: ";
    echo $marks['harry']['Maths'] . "<br>";

?>