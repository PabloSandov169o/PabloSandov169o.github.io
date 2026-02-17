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