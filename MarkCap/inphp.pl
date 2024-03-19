<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Protest+Strike&display=swap');

       
    .card-title, .card-text, .h1, .navbar {
      font-family: 'Protest Strike', sans-serif;
    }
  
      </style>

    <title>MarkCap</title>
  </head>
  <body>

    <nav class="navbar navbar-expand-lg navbar-light bg-warning">
        <a class="navbar-brand" href="#">MarkCap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <!--drop menu-->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <div class="dropdown-menu bg-warning">
                  <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>

            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            
          </ul>
        </div>
      </nav>

<div class="container">
  <?php
  // This is a PHP comment//
  echo " <h1> Hello, world!  </h1>  ";
?> 
  <div class="row mt-5 m-2">

    <!-- Card 1 -->
    <div class="col-md-4">
      <div class="card shadow bg-light" style="width: 18rem;">
        <img src="https://images.unsplash.com/photo-1620743364195-6915419c6dc6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Born to street ball</h5>
          <p class="card-text">Elevate your style with this sporty accessory, perfect for urban vibes and casual streetwear.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-danger">-50%</li>
          <li class="list-group-item">£20</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link text-success">Go</a>
          <a href="#" class="card-link">Share</a>
        </div>
      </div>
    </div>

    <!-- Card 2 -->
    <div class="col-md-4">
      <div class="card shadow bg-light" style="width: 18rem;">
        <img src="https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=1604&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Palm Tree Grey Cap</h5>
          <p class="card-text">beachy vibes with this trendy accessory, featuring a palm tree design. Perfect for a laid-back style under the sun.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">-20%</li>
          <li class="list-group-item">£30</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link text-success">Go</a>
          <a href="#" class="card-link">Share</a>
        </div>
      </div>
    </div>

    <!-- Card 3 -->
    <div class="col-md-4">
      <div class="card shadow bg-light" style="width: 18rem;">
        <img src="https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Melted Ice Cream Logo Cap</h5>
          <p class="card-text">Add a sweet touch to your look with this playful cap showcasing a melted ice cream logo. Cool and quirky for a fun, summer-ready style.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">-30%</li>
          <li class="list-group-item">£15</li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link text-success">Go</a>
          <a href="#" class="card-link">Share</a>
        </div>
      </div>
    </div>




</div>
      


    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>

    
  </body>
</html>