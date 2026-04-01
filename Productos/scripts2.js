// ELEMENTOS
const searchInput = document.getElementById("searchInput");
const tarjetas = document.querySelectorAll(".trabajo-card");
const botones = document.querySelectorAll(".botones-filtro button");

let filtroActivo = "todos";

// FUNCION PRINCIPAL DE FILTRADO
function aplicarFiltros() {
    const textoBusqueda = searchInput.value.toLowerCase();

    tarjetas.forEach(card => {
        const titulo = card.querySelector("h2").textContent.toLowerCase();
        const tags = card.getAttribute("data-tags");

        const coincideBusqueda = titulo.includes(textoBusqueda);
        const coincideTag = filtroActivo === "todos" || tags.includes(filtroActivo);

        if (coincideBusqueda && coincideTag) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

// BUSCADOR
searchInput.addEventListener("input", aplicarFiltros);

// BOTONES DE FILTRO
botones.forEach(boton => {
    boton.addEventListener("click", function () {
        botones.forEach(btn => btn.classList.remove("activo"));
        this.classList.add("activo");

        filtroActivo = this.textContent.toLowerCase();
        if (filtroActivo === "todos") filtroActivo = "todos";

        aplicarFiltros();
    });
});

// HEADER ANIMADO AL SCROLL
let lastScroll = 0;
const header = document.querySelector(".top-bar");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        header.classList.add("hide");
    } else {
        header.classList.remove("hide");
    }

    lastScroll = currentScroll;
});

// CARRUSEL DE IMAGENES

const carruseles = document.querySelectorAll(".trabajo-img");

carruseles.forEach(carrusel => {

    const imagenes = carrusel.querySelectorAll(".carrusel img");
    const btnIzq = carrusel.querySelector(".izquierda");
    const btnDer = carrusel.querySelector(".derecha");

    let indice = 0;

    function mostrarImagen(i) {

        imagenes.forEach(img => {
            img.classList.remove("activa");
        });

        imagenes[i].classList.add("activa");
    }

    btnDer.addEventListener("click", () => {

        indice++;

        if (indice >= imagenes.length) {
            indice = 0;
        }

        mostrarImagen(indice);

    });

    btnIzq.addEventListener("click", () => {

        indice--;

        if (indice < 0) {
            indice = imagenes.length - 1;
        }

        mostrarImagen(indice);

    });

});