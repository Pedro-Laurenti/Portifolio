//efeito de escrita no header

function typeWrite(elemento, tempoPausa, tempoEscrita, tempoApagamento){
    const textoCompleto = elemento.innerHTML;
    const textoArray = textoCompleto.split('');
    let textoAtual = '';
    let index = 0;
    let escrevendo = true;
    
    function escrever(){
        textoAtual += textoArray[index];
        elemento.innerHTML = textoAtual;
        index++;
        if(index >= textoArray.length){
            escrevendo = false;
            setTimeout(apagar, tempoPausa);
        } else {
            setTimeout(escrever, tempoEscrita);
        }
    }
    
    function apagar(){
        textoAtual = textoAtual.slice(0, -1);
        elemento.innerHTML = textoAtual;
        if(textoAtual.length === 0){
            escrevendo = true;
            index = 0;
            setTimeout(escrever, tempoPausa);
        } else {
            setTimeout(apagar, tempoApagamento);
        }
    }
    
    escrever();
}

const titulo = document.querySelector('.titulo-card-animado');
typeWrite(titulo, 4000, 75, 50);

//animação no scrool

function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    const targetOffset = targetElement.offsetTop;
    const scrollDuration = 1000; // Duração da animação em milissegundos
    const scrollStep = Math.PI / (scrollDuration / 15); // Valor do incremento de rolagem

    let scrollCount = 0;
    let currPos = window.pageYOffset;

    const scrollInterval = setInterval(() => {
    if (scrollCount >= scrollDuration) {
        clearInterval(scrollInterval);
    }

    scrollCount += 15;
    const newPos = easeInOut(currPos, targetOffset, scrollCount, scrollDuration);
    window.scrollTo(0, newPos);
    }, 15);
}

function easeInOut(start, end, current, duration) {
    const delta = end - start;
    const currentTime = current / duration;
    const easeInCubic = currentTime * currentTime * currentTime;
    return start + delta * easeInCubic;
}