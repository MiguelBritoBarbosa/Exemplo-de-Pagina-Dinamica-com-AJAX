import carregaPagina from "./carregaPagina.js";

document.addEventListener("click", (e) => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === "a") {
        e.preventDefault();
        carregaPagina(el);
    }
});
