let index = 0;
const slides = document.querySelectorAll('.slide');

function cambiarImagen() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

setInterval(cambiarImagen, 3000);

// Número WhatsApp aleatorio
document.getElementById("whatsapp").innerText =
    "+34 692 19 94 07";

