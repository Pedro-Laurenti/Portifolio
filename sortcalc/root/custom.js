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
    const targetOffset = targetElement.offsetTop -30; // Capturar a posição do início da div
    const scrollDuration = 1000; // Duração da animação em milissegundos

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

//Substituição do nome no dropdown das skills

function updateDropdownText1(name) {
    const dropdownElement = document.getElementById('dropdown-nome-atualizar-1');
    dropdownElement.innerText = name;
}

function updateDropdownText2(name) {
    const dropdownElement = document.getElementById('dropdown-nome-atualizar-2');
    dropdownElement.innerText = name;
}


//animação de aparecimento dos itens on-scrolling

function handleScroll() {
    var elementos = document.getElementsByClassName("elemento-animado");
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

    for (var i = 0; i < elementos.length; i++) {
        var elemento = elementos[i];
        var posicaoTopo = elemento.getBoundingClientRect().top;

        if (posicaoTopo < windowHeight && scrollTop > 0) {
            elemento.classList.add("fade-in");
        } else {
            elemento.classList.remove("fade-in");
        }
    }
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("resize", handleScroll);
window.addEventListener("touchmove", handleScroll);