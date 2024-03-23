
<!doctype html>
<html lang="en">
  <head>
<title> CRUD Practice!</title>
  </head>
  <body>

  <!--PHP HERE-->

  <?php 
	if ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' )
	{
	  # Connect to the database.
	  require ('connect_db.php'); 

  # Initialize an error array.
  $errors = array();

  # Check for item name .
  if ( empty( $_POST[ 'item_name' ] ) )
  { $errors[] = 'Enter the item name.' ; }
  else
  { $n = mysqli_real_escape_string( $link, trim( $_POST[ 'item_name' ] ) ) ; }

  # Check for a item decription.
  if (empty( $_POST[ 'item_desc' ] ) )
  { $errors[] = 'Enter the item decription.' ; }
  else
  { $d = mysqli_real_escape_string( $link, trim( $_POST[ 'item_desc' ] ) ) ; }
  
  # Check for a item image.
  if (empty( $_POST[ 'item_img' ] ) )
  { $errors[] = 'Enter the item image.' ; }
  else
  { $img = mysqli_real_escape_string( $link, trim( $_POST[ 'item_img' ] ) ) ; }
  
  # Check for a item price.
  if (empty( $_POST[ 'item_price' ] ) )
  { $errors[] = 'Enter the item image.' ; }
  else
  { $p = mysqli_real_escape_string( $link, trim( $_POST[ 'item_price' ] ) ) ; }

	
   # On success data into my_table on database.
  if ( empty( $errors ) ) 
  {
    $q = "INSERT INTO products (item_name, item_desc, item_img, item_price) 
	VALUES ('$n','$d', '$img', '$p' )";
    $r = @mysqli_query ( $link, $q ) ;
    if ($r)
    { echo '<p>New record created successfully</p>
		<a href="create_record.php">Add Records</a>  |  <a href="read_table.php">Read Records</a>  |  <a href="update_record.php">Update Record</a>  | <a href="delete_record.php">Delete Record</a>'; }
  
    # Close database connection.
    mysqli_close($link); 

    exit();
  }
   
  # Or report errors.
  else 
  {
    echo '<p>The following error(s) occurred:</p>' ;
    foreach ( $errors as $msg )
    { echo "$msg<br>" ; }
    echo '<p>Please try again.</p></div>';
    # Close database connection.
    mysqli_close( $link );
	
  }  
}
?>

<!--HTML FORM-->

<form action="create.php" method="post" enctype="multipart/form-data">
  <label for="name">Item Name:</label>
  <input type="text" id="item_name" name="item_name" required value="<?php if (isset($_POST['item_name'])) echo $_POST['item_name']; ?> "> <br>

  <label for="description">Description:</label>
  <textarea id="item_desc" name="item_desc" required value="<?php if (isset($_POST['item_desc'])) echo $_POST['item_desc']; ?>"></textarea><br>

  <label for="image">Image:</label>
  <input type="text" id="item_img" name="item_img" required value="<?php if (isset($_POST['item_img'])) echo $_POST['item_img']; ?>"><br>

  <label for="price">Price:</label>
  <input type="number" id="item_price" name="item_price" min="0" step="0.01" required value="<?php if (isset($_POST['item_price'])) echo $_POST['item_price']; ?>"><br>

  <input type="submit" value="Submit">
</form>
</body>
</html>