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


    // SLIDER NOVEDADES (manual con bucle)
let indexNovedad = 0;
const novedades = document.querySelectorAll('.novedad');

function cambiarNovedad(direccion) {

    novedades[indexNovedad].classList.remove('active');

    indexNovedad += direccion;

    if (indexNovedad >= novedades.length) {
        indexNovedad = 0;
    }

    if (indexNovedad < 0) {
        indexNovedad = novedades.length - 1;
    }

    novedades[indexNovedad].classList.add('active');
}
