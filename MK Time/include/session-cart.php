<?php
# Open database connection.
  require ('../connect_db.php');

// TEST DATABASE
$result = mysqli_query($link, "SLEECT * FROM product LIMIT 10");
if ($result) {
    while ($row = mysqli_fetch_assoc($result)) {
        print_r($row);
    }
} else {
    echo "ERROR: " . mysqli_error($link);
}

// ABOVE TEST END

session_start();
//initialize cart if not set or is unset.
if(! isset($_SESSION['cart'])){
$_SESSION['cart'] = array();
}
//unset quantity.
unset($_SESSION['item_qty_array']);
?>