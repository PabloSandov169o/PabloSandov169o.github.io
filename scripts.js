let index = 0;
const slides = document.querySelectorAll('.slide');

function cambiarImagen() {

    // Quitar "active" de TODAS las imágenes
    slides.forEach(slide => slide.classList.remove('active'));

    // Aumentar índice
    index = (index + 1) % (slides.length / 2); 
    // Dividimos entre 2 porque ahora hay 2 sliders con las mismas imágenes

    // Activar la imagen correspondiente en AMBOS sliders
    document.querySelectorAll('.lado-izquierdo .slide')[index].classList.add('active');
    document.querySelectorAll('.lado-derecho .slide')[index].classList.add('active');
}

// ⏱️ Cambian cada 7 segundos Y A LA VEZ
setInterval(cambiarImagen, 7000);

// Número WhatsApp
document.getElementById("whatsapp").innerText =
    "+34 692 19 94 07";

