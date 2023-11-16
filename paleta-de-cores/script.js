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
    descricao.style.display = 'block';
    descricaoAberta = descricao; // Atualiza a descrição atualmente aberta
}

// Adicione um ouvinte de evento de clique no documento inteiro
document.addEventListener('click', (event) => {
    if (descricaoAberta && !circulo.contains(event.target) && !event.target.classList.contains('descricao')) {
        // Se uma descrição está aberta, o clique não está dentro do círculo e não é na própria descrição
        descricaoAberta.style.display = 'none';
        descricaoAberta = null;
    }
});

criarPartes();