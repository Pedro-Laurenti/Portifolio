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