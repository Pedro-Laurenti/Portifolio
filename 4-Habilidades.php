<link rel="stylesheet" href="./root/4-Habilidades.css">

<div id="Habilidades">
    <div id="area-de-skills"  class="elemento-animado">
    <h1 id="titulo-skills-animado" class="titulo-skills-animado">
        Habilidades
    </h1>
    <div id="celulas-de-skills">
        <div class="card text-white bg-dark mb-3">
        <div class="card-header">
            <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item" id="apenas-desktop" role="presentation">
                <a class="nav-link active" data-bs-toggle="tab" href="#Programação" aria-selected="true" role="tab">Programação</a>
            </li>
            <li class="nav-item" id="apenas-desktop" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#Design" aria-selected="false" role="tab" tabindex="-1">Design</a>
            </li>
            <li class="nav-item" id="apenas-desktop" role="presentation">
                <a class="nav-link" data-bs-toggle="tab" href="#Skills" aria-selected="false" role="tab" tabindex="-2">Skills</a>
            </li>
            <li class="nav-item dropdown" id="apenas-mobile">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" id="dropdownMenuLink">
                <span id="dropdown-nome-atualizar-2">
                    Programação
                </span>
                </a>
                <div class="dropdown-menu" role="presentation">
                <a class="dropdown-item" data-bs-toggle="tab" href="#Programação" aria-selected="true" role="tab" onclick="updateDropdownText2('Programação')">Programação</a>
                <a class="dropdown-item" data-bs-toggle="tab" href="#Design" aria-selected="false" role="tab" tabindex="-1" onclick="updateDropdownText2('Design')">Design</a>
                <a class="dropdown-item" data-bs-toggle="tab" href="#Skills" aria-selected="false" role="tab" tabindex="-2" onclick="updateDropdownText2('Skills')">Outras Skills</a>
                </div>
            </li>
            </ul>
        </div>
        <div class="card-body">

            <div id="myTabContent" class="tab-content">

            <div class="tab-pane fade active show" id="Programação" role="tabpanel">
                <div id="conteudo-da-tab">
                <img class="img-celula" alt="html-logo" src="./root/img/cards/Asset 65.svg">
                <img class="img-celula" alt="css-logo" src="./root/img/cards/Asset 66.svg">
                <img class="img-celula" alt="py-logo" src="./root/img/cards/Asset 62.svg">
                <img class="img-celula" alt="JS-logo" src="./root/img/cards/Asset 64.svg">
                <img class="img-celula" alt="php-logo" src="./root/img/cards/Asset 67.svg">
                <img class="img-celula" alt="R-logo" src="./root/img/cards/Asset 63.svg">

                <div id="div-progress-bar">
                    <p>Meu nivel de entendimento:</p>
                    <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 85%;" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    85%
                </div>
                
                </div>
            </div>

            <div class="tab-pane fade" id="Design" role="tabpanel">
                <div id="conteudo-da-tab">

                <img class="img-celula" alt="XD-logo" src="./root/img/cards/Asset 57.svg">
                <img class="img-celula" alt="InDesign-logo" src="./root/img/cards/Asset 58.svg">
                <img class="img-celula" alt="Illustrator-logo" src="./root/img/cards/Asset 59.svg">
                <img class="img-celula" alt="Photoshop-logo" src="./root/img/cards/Asset 60.svg">
                <img class="img-celula" alt="Premiere-logo" src="./root/img/cards/Asset 61.svg">

                
                <div id="div-progress-bar">
                    <p>Meu nivel de entendimento:</p>
                    <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 95%;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    95%
                </div>

                </div>
            </div>

            <div class="tab-pane fade" id="Skills" role="tabpanel">
                <div id="conteudo-da-tab">
                
                <img class="img-celula" alt="XD-logo" src="./root/img/cards/Asset 68.svg">
                <img class="img-celula" alt="InDesign-logo" src="./root/img/cards/Asset 69.svg">
                <img class="img-celula" alt="Illustrator-logo" src="./root/img/cards/Asset 70.svg">
                <img class="img-celula" alt="Photoshop-logo" src="./root/img/cards/Asset 71.svg">
                <img class="img-celula" alt="Premiere-logo" src="./root/img/cards/Asset 72.svg">

                <div id="div-progress-bar">
                    <p>Meu nivel de entendimento:</p>
                    <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 75%;" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    75%
                </div>

                </div>
            </div>

            </div>
        </div>
        </div>
    </div>
    </div>
    
    <div id="ilustracao-de-skills">
    <img id="img-secundaria-habilidades-edt" src="./root/img/img-skills.png" alt="">
    </div>
</div>
