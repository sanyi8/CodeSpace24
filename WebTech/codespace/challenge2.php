<!-- Create a PHP function that takes in a string as an argument and returns the string with all vowels replaced with the character "x".

1. Define a PHP function replaceVowelsWithX that takes in a string argument $str.

2. Define an array $vowels that contains all the vowels in both lowercase and uppercase.

3. Use the str_replace function to replace all occurrences of the vowels in $str with the character "x".

4. Return the modified string as the output of the function.

5.  Then use the echo statement to output the modified string to the screen.



https://www.w3schools.com/php/func_string_str_replace.asp -->

<?php
    // 3. put everything into the fuction which will do the magic
    function replaceVowelsWithX($str) {
        // 1. array with the possible vowels in both format
        $vowels = array('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U');

        // 2. return the str_replace() Function   https://www.w3schools.com/php/func_string_str_replace.asp
        return str_replace($vowels,"x", $str);

    }

    $input = "Hello World";
    $output = replaceVowelsWithX($input);

    echo $output;

?>
