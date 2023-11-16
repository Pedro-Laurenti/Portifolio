<link rel="stylesheet" href="root/1.2-slider-projetos.css">
<script src="https://kit.fontawesome.com/02eeda6330.js" crossorigin="anonymous"></script>

<div id="slider-wrapper" class="elemento-animado">
    <!--Slider-->
    <div id="slider">
        
        <div class="slide">
            <img class="img-carrossel" src="./root/img/img-exemplo.png" alt="carrossel imagem">
        </div>

        <div class="slide">
            <img class="img-carrossel" src="./root/img/img-exemplo.png" alt="carrossel imagem">
        </div>

        <div class="slide">
            <img class="img-carrossel" src="./root/img/img-exemplo.png" alt="carrossel imagem">
        </div>

        <div class="slide">
            <img class="img-carrossel" src="./root/img/img-exemplo.png" alt="carrossel imagem">
        </div>

        <!--Controlling arrows-->
        <span class="controls" onclick="prevSlide(-1)" id="left-arrow">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </span>
        <span class="controls" id="right-arrow" onclick="nextSlide(1)">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </span>
    </div>
    <div id="dots-con">
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    </div>
</div>
<script src="root/1.2-slider-projetos.js"></script>
