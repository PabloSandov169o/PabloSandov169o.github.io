// BUSCADOR + FILTRO
const searchInput = document.getElementById("searchInput");
const tagFilter = document.getElementById("tagFilter");
const cards = document.querySelectorAll(".card");

function filterCards() {
    const searchValue = searchInput.value.toLowerCase();
    const selectedTag = tagFilter.value;

    cards.forEach(card => {
        const name = card.dataset.name.toLowerCase();
        const tags = card.dataset.tag;

        const matchName = name.includes(searchValue);
        const matchTag = selectedTag === "all" || tags.includes(selectedTag);

        if (matchName && matchTag) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

searchInput.addEventListener("input", filterCards);
tagFilter.addEventListener("change", filterCards);

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

function filtrar(tag) {
    const tarjetas = document.querySelectorAll('.trabajo-card');
    const botones = document.querySelectorAll('.filtros button');

    // Quitar clase activa
    botones.forEach(btn => btn.classList.remove('activo'));

    // Añadir clase activa al botón pulsado
    event.target.classList.add('activo');

    tarjetas.forEach(card => {
        const tags = card.getAttribute('data-tags');

        if (tag === 'todos' || tags.includes(tag)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}