<?php

function checkAge($age) {
    if($age< 13) {
        echo "You are a child";
    } else if ($age <= 17){
        echo "You are a teenager";
    } else if ($age <= 64){
        echo "You are an adult";    
    } else {
        echo "You are a senior citizen";
    }
}

checkAge(45);

?>