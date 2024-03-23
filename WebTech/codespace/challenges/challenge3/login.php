<?php # DISPLAY COMPLETE REGISTRATION PAGE.

if ( $_SERVER[ 'REQUEST_METHOD' ] == 'POST' )
{
  # Connect to the database.
  require ('connect_db.php'); 
  
  
  # Initialize an error array.
  $errors = array();

  # Check for a first name.
  if ( empty( $_POST[ 'first_name' ] ) )
  { $errors[] = 'Enter your first name.' ; }
  else
  { $fn = mysqli_real_escape_string( $link, trim( $_POST[ 'first_name' ] ) ) ; }

  # Check for a last name.
  if (empty( $_POST[ 'last_name' ] ) )
  { $errors[] = 'Enter your last name.' ; }
  else
  { $ln = mysqli_real_escape_string( $link, trim( $_POST[ 'last_name' ] ) ) ; }

  # Check for an email address:
  if ( empty( $_POST[ 'email' ] ) )
  { $errors[] = 'Enter your email address.'; }
  else
  { $e = mysqli_real_escape_string( $link, trim( $_POST[ 'email' ] ) ) ; }

  # Check for a password and matching input passwords.
  if ( !empty($_POST[ 'pass1' ] ) )
  {
    if ( $_POST[ 'pass1' ] != $_POST[ 'pass2' ] )
    { $errors[] = 'Passwords do not match.' ; }
    else
    { $p = mysqli_real_escape_string( $link, trim( $_POST[ 'pass1' ] ) ) ; }
  }
  else { $errors[] = 'Enter your password.' ; }
  
  # Check if email address already registered.
  if ( empty( $errors ) )
  {
    $q = "SELECT user_id FROM users WHERE email='$e'" ;
    $r = @mysqli_query ( $link, $q ) ;
    if ( mysqli_num_rows( $r ) != 0 ) $errors[] = 'Email address already registered. <a class="alert-link" href="login.php">Sign In Now</a>' ;
  }
  

  # On success register user inserting into 'users' database table.
  if ( empty( $errors ) ) 
  {
    $q = "INSERT INTO users (first_name, last_name, email, pass, reg_date) 
	VALUES ('$fn', '$ln', '$e', SHA2('$p',256), NOW() )";
    $r = @mysqli_query ( $link, $q ) ;
    if ($r)
    { echo '<div class="container">
<div class="alert alert-secondary" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">×</span>
  </button>
    <h4 class="alert-heading"Registered!</h4>
    <p>You are now registered.</p>
    <a class="alert-link" href="login.php">Login</a>'; }
  
    # Close database connection.
    mysqli_close($link); 

    exit();
  }
  # Or report errors.
  else 
  {
    echo '<div class="container">
	   <div class="alert alert-secondary" role="alert">
	      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
		 <span aria-hidden="true">×</span>
	      </button>
		<h4 class="alert-heading" id="err_msg">The following error(s) occurred:</h4>' ;
    foreach ( $errors as $msg )
    { echo " - $msg<br>" ; }
    echo '<p>or please try again.</p></div>';
    # Close database connection.
    mysqli_close( $link );
  }  
}
?>


<form action="register.php" method="post">
  <div class="row">
   <div class="col">
    <div class="form-group">
     <label for="inputfirst_name">First Name</label>
     <input type="text" name="first_name" class="form-control" placeholder="* First Name " value="<?php if (isset($_POST['first_name'])) echo $_POST['first_name']; ?>"> 
    </div>
   </div><!--closing col-->
   <div class="col">
     <div class="form-group">
      <label for="inputlast_name">Last Name</label>
      <input type="text" name="last_name" class="form-control" placeholder="* Last Name" value="<?php if (isset($_POST['last_name'])) echo $_POST['last_name']; ?>">
     </div>
   </div><!--closing col-->
  </div><!--closing row-->
    <div class="form-group">
      <label for="inputemail">Email</label>
      <input type="email" name="email" class="form-control" placeholder="* email@example.com" value="<?php if (isset($_POST['email'])) echo $_POST['email']; ?>">
    </div>
      <small id="emailHelp" class="form-text text-muted">*We'll never share your email with anyone else.</small>
    <br>
<div class="row">
  <div class="col">
    <div class="form-group">
      <label for="inputpass1">Create New Password</label>
      <input type="password" name="pass1" class="form-control" placeholder="* Create New Password" value="<?php if (isset($_POST['pass1'])) echo $_POST['pass1']; ?>">
    </div>
   </div><!-- closing col-->
   <div class="col">
    <div class="form-group">
      <label for="inputpass2">Confirm Password</label>
      <input type="password" name="pass2" class="form-control" placeholder="* Confirm Password" value="<?php if (isset($_POST['pass2'])) echo $_POST['pass2']; ?>">
    </div>
   </div><!--closing col-->
  </div><!-- closing row -->
<hr>
  <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
				<input type="submit" class="btn btn-dark btn-lg btn-block" value="Create Account Now"></p>
</form><!-- closing form -->
    