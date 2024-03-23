<?php # CONNECT TO MySQL DATABASE.

# Define database credentials as constants
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', ''); //password
define('DB_NAME', 'mktime');

# Create a new database connection
$link = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME)

# Check for errors
if (!$link) {
	# Display error message and exit securely!
	die('Could not connect to MySQL:'.mysqli_connect_error());
}
# success message
echo 'Connected to database!';

# Close database connection
mysqli_close($link);

?> 