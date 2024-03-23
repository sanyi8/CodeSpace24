<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

    <title>Multiplication Table</title>
  </head>
  <body>
    

    <div class="container m-6 rounded bg-light shadow">
    <h1 class="text-center">Multiplication Table</h1>
    <form method="post">
            <label for="num">Enter a number:</label>
            <input type="number" class="form-control" id="num" name="num" required></input>
            <button type="submit" class="btn btn-secondary m-2 shadow">Show Table</button>

        </div>
    </form>


    <div class="row m-4 php text-center p-2">
        <div class="col">
        <?php

        // get the num variable
        $num = $_POST['num'];

        for($count = 1; $count<=10; $count++){
            echo($num . "x". $count ."=". $num * $count);
            echo("<br>");
        }
        ?>
        </div>
    </div>



    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>

  </body>
</html>