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

// AQUI APARECERA EL GIRO DE LOGO COMO SI FUERA UNA MONEDA
const coin = document.getElementById("coin");

const images = [
    "Imagenes/Logo Oscuro.png",
    "Imagenes/Logo Claro.png"
];
let current = 0;
let rotation = 0;

function flipCoin() {
    rotation += 180;
    coin.style.transform = `rotateY(${rotation}deg)`;

    // Cambiamos la imagen justo a mitad del giro
    setTimeout(() => {
      current = (current + 1) % images.length;
      coin.src = images[current];
    }, 500); // mitad de la animación (1s / 2)
  }

  // Primera espera de 10 segundos
  setTimeout(() => {
    flipCoin();
    // Luego se repite cada 10 segundos
    setInterval(flipCoin, 10000);
  }, 10000);