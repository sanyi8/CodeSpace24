<?php
# Check form submitted.	
if ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' )
{
  #Connect to the database.
  require ('connect_db.php'); 

  #Initialize an error array.
  $errors = array();

# Check for id.
  if ( empty( $_POST[ 'id' ] ) )
  { $errors[] = '' ; }
  else
  { $id = mysqli_real_escape_string( $link, trim( $_POST[ 'id' ] ) ) ; }
  
  # Check for name.
  if ( empty( $_POST[ 'name' ] ) )
  { $errors[] = 'Update name.' ; }
  else
  { $n = mysqli_real_escape_string( $link, trim( $_POST[ 'name' ] ) ) ; }

  # Check for email
  if (empty( $_POST[ 'email' ] ) )
  { $errors[] = 'Update email.' ; }
  else
  { $e = mysqli_real_escape_string( $link, trim( $_POST[ 'email' ] ) ) ; }

# Check for phone No.
  if (empty( $_POST[ 'phone' ] ) )
  { $errors[] = 'Update phone.' ; }
  else
  { $p = mysqli_real_escape_string( $link, trim( $_POST[ 'phone' ] ) ) ; }
  
  # Update the record in the database
  {
    $sql = "UPDATE users SET id=$id, name='$n', email='$e', phone='$p' WHERE id='$id'";
    $r = @mysqli_query ( $link, $sql ) ;
    if ($r)
    {
       header("Location: read.php");
    } else {
        echo "Error updating record: " . $link->error;
    }
  
    # Close database connection.
    
	mysqli_close($link); 
    exit();
  }
 mysqli_close($link); 
    exit();
  }
  # Or report errors.
  else 
  {  
    echo ' 
	<script type ="text/JavaScript">
	alert("' ;
    foreach ( $errors as $msg )
    { echo "$msg " ; }
    echo 'Please try again.")</script>';
  } 
  
?>

<!doctype html>
<html lang="en">
  <head>
<title> CRUD Practice!</title>
  </head>
  <body>
<form action="update.php" method="post" enctype="multipart/form-data">
  <input type="hidden" name="id" value="<?php if (isset($_GET['id'])) echo $_GET['id']; ?>">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required value="<?php if (isset($_POST['name'])) echo $_POST['name']; ?> "> <br>
<br>
  <label for="description">Email:</label>
  <input id="email" name="email" required value="<?php if (isset($_POST['email'])) echo $_POST['email']; ?>"></textarea><br>
<br>
  <label for="image">Phone No:</label>
   <input type="text" id="phone" name="phone" required value="<?php if (isset($_POST['phone'])) echo $_POST['phone']; ?>"><br>
<br>
<input type="submit" value="Create">
</form>
<br>

</body>
</html>