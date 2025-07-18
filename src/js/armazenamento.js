// armazenamento.js
import { renderRecipes } from './receitas.js';

export function configurarBusca() {
    const searchInput = document.getElementById('searchInput');
    const savedSearch = localStorage.getItem("busca");

    if (savedSearch) {
        searchInput.value = savedSearch;
    }

    searchInput.addEventListener("input", () => {
        const termo = searchInput.value;
        localStorage.setItem("busca", termo);
        renderRecipes(termo);
    });

    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
}

export function configurarUltima() {
    const btnUltima = document.getElementById("btnUltima");

    if (btnUltima) {
        btnUltima.addEventListener("click", () => {
            const id = localStorage.getItem("ultimaReceita");
            if (id !== null) {
                window.location.hash = `#receita/${id}`;
            } else {
                alert("Você ainda não visualizou nenhuma receita.");
            }
        });
    }
}