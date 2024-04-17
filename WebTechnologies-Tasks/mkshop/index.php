<!--include header.php with header from HTML code-->
<!--SESSION START VIDEO https://youtu.be/YloyMFPJyV4?t=866 -->
<?php
// START SESSION ARRAY
// HOLD ITEM DATA in CART WHILE BROWSING
session_start();
#include('connect_db.php');
$link = mysqli_connect("localhost", "root", "", "mktime_db");
$_SESSION['cart'] = array();
// check if the add cart form submitted
if (isset($_POST['add_to_cart'])) {
  //check if the cart session exsist
  if (isset($_SESSION['cart'])) {
    // GET and array of all items in the CART USE id
    $session_array_id = array_column($_SESSION['cart'], "id");

    // IF the item is NOT IN CART ADD with specified quantity
    if (!in_array($_GET['id'], $session_array_id)) {

      // CREATE and array with the item details from the form data
      $session_array = array(
        'id' => $_GET['id'],
        "name" => $_POST['name'],
        "price" => $_POST['price'],
        "quantity" => $_POST['quantity']
      );
      // Add the item to the cart session variable
      $_SESSION['cart'][] = $session_array;
    }
  } else {
    // if the cart session variable doesnt exist, create as an empty array
    $_SESSION['cart'] = array();
    // CREATE an ARRAY with item details from the /FORM data
    $session_array = array(
      'id' => $_GET['id'],
      "name" => $_POST['name'],
      "price" => $_POST['price'],
      "quantity" => $_POST['quantity']
    );
    $_SESSION['cart'][] = $session_array;
  }
}

?>

<!-- SESSION ENDS HERE -->
<!--include('connect_db.php'); TUTORIAL VIDEO https://youtu.be/YloyMFPJyV4?t=866 -->
<!-- HTML SHOPPING CART-->

<!doctype html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Shopping Cart</title>

  <!-- Bootstrap CSS TO THE HEAD TO LOAD FASTER-->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

</head>

<body>

  <div class="container-fluid">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-6">
          <h2 class="text-center">Shopping Cart</h2>
          <div class="col-md-12">
            <div class="row">

              <!-- PHP COMES HERE FOR DINAMIC DATA  -->
              <?php
              $query = "select * from items";
              $result = mysqli_query($link, $query);

              while ($row = mysqli_fetch_array($result)) {
              ?>
                <div class="col-md-6">
                  <form method="POST" action="index.php?id=<?= $row['id'] ?>">

                    <img src="img/<?= $row['image'] ?>" style='height: 150px;'>

                    <!-- NEW WAY OF PHP CODE -->
                    <h5 class="text-center"><?= $row['name'] ?></h5>
                    <h6 class="text-center">£<?= number_format($row['price']) ?></h6>
                    <input type="hidden" name="name" value="<?= $row['name'] ?>">
                    <input type="hidden" name="price" value="<?= $row['price'] ?>">
                    <input type="number" name="quantity" value="1" class="form-control">
                    <input type="submit" name="add_to_cart" class="btn btn-secondary btn-block my-2" value="Add to cart">

                  </form>
                </div>

              <?php }
              ?>

            </div>
          </div>

        </div>
        <div class="col-md-4">
          <h2 class="text-center">Item Selected</h2>

          <?php

          $total = 0;

          $output = "";
          $output .= "
                <table class='table-bordered table-striped'>
                <tr>
                  <th>ID</th>
                  <th>Item Name</th>
                  <th>Item Price</th>
                  <th>Item Quantity</th>
                  <th>Total Price</th>
                  <th>Action</th>
                </tr>               
                ";

// Loop through each item in the cart
          if (!empty($_SESSION['cart'])) {

            foreach ($_SESSION['cart'] as $key => $value) {
              //append table rows with item details
              $output .= "
                                
                  <tr>
                  <td>" . $value['id'] . "</td>
                  <td>" . $value['name'] . "</td>
                  <td>" . $value['price'] . "</td>
                  <td>" . $value['quantity'] . "</td>
                  <td>£" . number_format($value['price'] * $value['quantity'], 2) . "</td>
                  <td>
                        <a href='index.php?action=remove&id=" . $value['id'] . "'>                                  
                          <button class='btn btn-danger btn-block'>Remove</button>                
                        </a>
                  </td>            
                  </tr>";

              $total = $total += $value['quantity'] * $value['price'];
            }

            $output .= "
                  <tr>
                  <td colspan='3'></td>
                  <td></b>Total Price</b></td>
                  <td>£" . number_format($total, 2) . "</td>
                  <td>
                    <a href='index.php?action=clearall'>
                        <button class='btn btn-warning btn-block'>Clear</button>
                    </a>
                  </td>

                  </tr>";
          }

              #$output .= "</value>";
              echo $output;
              ?>
        </div>
      </div>
      </div>
      </div>

      <?php 

      if(isset($_GET['action'])) {

        if($_GET['action'] == "clearall") {
          unset($_SESSION['cart']);
        }

        if ($_GET['action'] == "remove") {

          foreach ($_SESSION['cart'] as $key => $value) {

            if ($value['id'] == $_GET['id']) {
              unset($_SESSION['cart'][$key]);
            }
          }

      }
    }
    
      ?>

    <!-- Bootstrap JS and Popper.js -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

</body>

</html>