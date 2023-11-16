<!DOCTYPE html>
<html lang="en">
<meta charset="utf-8">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://bootswatch.com/5/darkly/bootstrap.css">
    <script src="https://code.jquery.com/jquery-3.6.1.js"></script>
    <script src="https://kit.fontawesome.com/09b3ced86b.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./root/custom.css">
    <link rel="shortcut icon" href="./root/img/icone-logo-fav.png" type="image/x-icon">
    <title>Pedro Laurenti - Portifólio</title>
</head>

<body>

<nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container">
  <a class="navbar-brand" href=""><img id="logo-nav" src="./root/img/icone-logo-fav.png" alt="logo-do-menu-nav"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" id="header-link" onclick="smoothScroll('sobre-mim')">Sobre mim</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="header-link" onclick="smoothScroll('Habilidades')">Habilidades</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="header-link" onclick="smoothScroll('projetos')">Projetos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="header-link" onclick="smoothScroll('Contato')">Contato</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div id="conteudo-do-site">

  <?php require_once 'calc.php'; ?>

</div>

<script src="https://bootswatch.com/_vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
<script src="root/custom.js"></script>

</body>

</html>
