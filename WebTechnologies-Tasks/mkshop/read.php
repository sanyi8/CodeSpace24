<!doctype html>
<html lang="en">
  <head>
<title> Read</title>
  </head>
  <body><?php 
	
	# Connect to the database.
	  require ('connect_db.php'); 

    $q = "SELECT * FROM items;" ;
    $r = @mysqli_query ( $link, $q ) ;
    if ( mysqli_num_rows( $r ) != 0 ) 
		
		{
		echo '
		<h1>Read Records</h1>
			<table class="table">
			<thead>
			<tr><th>Product ID</th><th>Product Name</th><th>Description</th><th>Image</th><th>Price</th></tr></thead><tbody>';
			
			while($row = mysqli_fetch_array($r,MYSQLI_ASSOC))
			{
			echo'<tr>
			<td>'.$row['item_id'].' </td><td>'.$row['item_name'].' </td><td>'.$row['item_desc'].'</td><td><img src="'.$row['item_img'].'" alt="product" width="50" height="50"></td><td>&pound'.$row['item_price'].'</td>
			';
		}
		
		echo'</tr></table></br><br><a href="create.php">Add Records</a>  |  <a href="read.php">Read Records</a>  |  <a href="update.php">Update Record</a>  | <a href="delete.php">Delete Record</a>';}
	
    # Close database connection.
    mysqli_close($link); 

    exit();
?>
</body>
</html>