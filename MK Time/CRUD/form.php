<form action="create.php" method="post" enctype="multipart/form-data">
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
   