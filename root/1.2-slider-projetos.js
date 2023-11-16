var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;
var intervalId; // Variável para armazenar o ID do intervalo

function prevSlide(n) {
    index += n;
    changeSlide();
    resetInterval();
}

function nextSlide(n) {
    index += n;
    changeSlide();
    resetInterval();
}

function changeSlide() {
    if (index > slides.length - 1)
        index = 0;

    if (index < 0)
        index = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }

    slides[index].style.display = "block";
    dots[index].classList.add("active");
}

function startInterval() {
    changeSlide(); // Chama changeSlide() imediatamente
    intervalId = setInterval(function() {
        index++;
        changeSlide();
    }, 2500); // 2500 milissegundos = 2,5 segundos
}

function resetInterval() {
    clearInterval(intervalId);
    startInterval();
}

// Iniciar o intervalo quando a página carregar
startInterval();