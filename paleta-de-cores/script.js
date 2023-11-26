const circulo = document.getElementById('circulo');
const numPartes = 7;
const cores = ['#FF5733', '#F18E1C', '#f2f544', '#43c635', '#0696BB', '#954B98', '#E6007E'];
const descricoes = document.querySelectorAll('.descricao');
let descricaoAberta = null; // Para rastrear a descrição atualmente aberta

function criarPartes() {
    const angulo = 360 / numPartes;
    const raio = circulo.offsetWidth / 2;

    for (let i = 0; i < numPartes; i++) {
        const parte = document.createElement('div');
        parte.classList.add('parte');
        parte.style.background = cores[i];
        parte.style.transformOrigin = '0 0';
        parte.style.transform = `rotate(${i * angulo}deg) skewY(${angulo}deg)`;
        
        parte.addEventListener('click', () => {
            if (descricaoAberta) {
                descricaoAberta.style.display = 'none'; // Fecha a descrição anterior
                descricaoAberta = null;
            }
            mostrarDescricao(descricoes[i]);
        });

        circulo.appendChild(parte);
    }
}

function mostrarDescricao(descricao) {
    // Oculta todos os elementos com a classe ".descricao"
    var elementosDescricao = document.querySelectorAll('.descricao');
    elementosDescricao.forEach(function(elemento) {
        elemento.style.display = 'none';
    });

    // Oculta todos os elementos com a classe ".descricao2"
    var elementosDescricao2 = document.querySelectorAll('.descricao2');
    elementosDescricao2.forEach(function(elemento) {
        elemento.style.display = 'none';
    });

    // Exibe a descrição atual
    descricao.style.display = 'block';

    // Atualiza a descrição atualmente aberta
    descricaoAberta = descricao;
}

document.addEventListener('DOMContentLoaded', function() {
    // Encontre todos os botões de fechar
    var botoesFechar = document.querySelectorAll('.botaoFechar');

    // Adicione um ouvinte de clique a cada botão de fechar
    botoesFechar.forEach(function(botaoFechar) {
        botaoFechar.addEventListener('click', function() {
            // Encontre a descrição correspondente ao botão clicado
            var descricao = this.parentElement;

            // Oculta a descrição ao clicar no botão X
            if (descricao) {
                descricao.style.display = 'none';
            }

            // Lógica para exibir descricao2 (assumindo que descricao2 é o próximo elemento irmão)
            var descricao2 = document.querySelectorAll('.descricao2');
            if (descricao2.length > 0) {
                descricao2[0].style.display = 'block';
            }

            descricaoAberta = null;
        });
    });
});

criarPartes();