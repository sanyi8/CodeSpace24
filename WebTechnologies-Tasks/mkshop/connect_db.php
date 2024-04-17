<?php # CONNECT TO MySQL DATABASE.

    define("HOSTNAME", "localhost");
    define("USERNAME", "root");     // default if not changed
    define("PASSWORD", ""); //default is empty
    define("DATABASE", "mktime_db");    //db FROM phpmyadmin/mktime_db

# Connect  on 'localhost' 'practice' .
$link = mysqli_connect(HOSTNAME, USERNAME, PASSWORD, DATABASE); 
if (!$link) { 

# Otherwise fail gracefully and explain the error. 
	die('Connection Fail: ' . mysqli_error($link)); 

} else {

echo 'Connected to the database successfully!';
}
?> 