/* globals bootstrap:false, Prism:false */

(function () {
    'use strict';

    //  Helper functions
    function escapeHtml(html) {
        return html.replace(/×/g, '&times;')
            .replace(/«/g, '&laquo;')
            .replace(/»/g, '&raquo;')
            .replace(/←/g, '&larr;')
            .replace(/→/g, '&rarr;');
    }

    function cleanSource(html) {
        // Escape HTML, split the lines to an Array, remove empty elements
        // and finally remove the last element
        let lines = escapeHtml(html).split('\n').filter(Boolean).slice(0, -1);
        const indentSize = lines[0].length - lines[0].trim().length;
        const re = new RegExp(' {' + indentSize + '}');

        lines = lines.map(line => {
            return re.test(line) ? line.slice(Math.max(0, indentSize)) : line;
        });

        return lines.join('\n');
    }

    // Add/remove `.navbar-transparent` on scroll; should probably be throttled later
    function addNavbarTransparentClass() {
        const navBarElement = document.querySelector('#home > .navbar');

        if (!navBarElement) {
            return;
        }

        window.addEventListener('scroll', () => {
            const scroll = document.documentElement.scrollTop;

            if (scroll > 50) {
                navBarElement.classList.remove('navbar-transparent');
            } else {
                navBarElement.classList.add('navbar-transparent');
            }
        });
    }

    // Add source modals
    function addSourceModals() {
        const sourceModalElement = document.getElementById('source-modal');

        if (!sourceModalElement) {
            return;
        }

        sourceModalElement.querySelector('.btn-copy').addEventListener('click', (e) => {
            if (navigator.clipboard) {
                const code = sourceModalElement.querySelector('.modal-body pre').innerText;
                navigator.clipboard.writeText(code);
            }

            const sourceModal = bootstrap.Modal.getOrCreateInstance(sourceModalElement);
            sourceModal.hide();
        });

        document.body.addEventListener('click', event => {
            if (!event.target.matches('.source-button')) {
                return;
            }

            const sourceModal = bootstrap.Modal.getOrCreateInstance(sourceModalElement);
            let html = event.target.parentNode.innerHTML;

            html = Prism.highlight(cleanSource(html), Prism.languages.html, 'html');

            sourceModalElement.querySelector('code').innerHTML = html;
            sourceModal.show();
        }, false);
    }

    addNavbarTransparentClass();

    addSourceModals();

    // Prevent empty `a` elements or `submit` buttons from navigating away
    const targets = document.querySelectorAll('[href="#"], [type="submit"]');

    for (const element of targets) {
        element.addEventListener('click', event => {
            event.preventDefault();
        });
    }

    // Add the "View Source" buttons in each component
    const bsComponents = document.querySelectorAll('.bs-component');

    for (const element of bsComponents) {
        const button = '<button class="source-button btn btn-primary btn-xs" type="button" tabindex="0"><i class="bi bi-code"></i></button>';
        element.insertAdjacentHTML('beforeend', button);
    }

    // Initialize popovers
    const popoverElements = document.querySelectorAll('[data-bs-toggle="popover"]');

    for (const popover of popoverElements) {
        new bootstrap.Popover(popover); // eslint-disable-line no-new
    }

    // Initialize tooltips
    const tooltipElements = document.querySelectorAll('[data-bs-toggle="tooltip"]');

    for (const tooltip of tooltipElements) {
        new bootstrap.Tooltip(tooltip); // eslint-disable-line no-new
    }
})();

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