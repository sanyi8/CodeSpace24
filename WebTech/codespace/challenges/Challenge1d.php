<!-- 
Numeric Arrays
Create and initialise an array variable using a suitable variable name to display the following values:

Monday
Tuesday
Wednesday
Thursday
Friday
Saturday
Sunday -->

<?php
# Create and initialise an array 
echo"<h1>Days of the Week</h1>";
$days = array('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');

# Display the bulletlist of the days use array values than write / echo the element to the list, do the same with each element in the array
foreach($days as $value) {echo "<ul><li>$value </li></ul>";

}

?>
