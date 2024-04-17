<?php 
include ( 'include/head.php' ) ;
# Display any error messages if present.
if ( isset( $errors ) && !empty( $errors ) )
{
 echo '<p id="err_msg">Oops! There was a problem:<br>' ;
 foreach ( $errors as $msg ) { echo " - $msg<br>" ; }
 echo 'Please try again or <a href="register.php">Register</a></p>' ;
}
?>

<!-- Display body section. -->
<div class="row">
  <div class="col-sm">
	<div class="card bg-light mb-3">
	  <div class="card-header"><h1>Login</h1>
		<div class="card-body">
		<form action="login_action.php" method="post">
		<div class="form-group">
			<label for="inputemail">Email</label>
			<input type="text" name="email" class="form-control" required placeholder="* Enter Email"> 
		</div>
		<div class="form-group">
		<input type="password" name="pass"  class="form-control" required placeholder="* Enter Password"></p>
		</div>
		<input type="submit" class="btn btn-dark btn-lg btn-block" value="Login" ></p>


</form><!-- closing form -->
			</div><!-- closing card header -->
		</div><!-- closing card -->
	  </div><!-- closing col -->
	</div><!-- closing row -->
	  </div><!-- closing container -->				
    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>

  </body>
</html>