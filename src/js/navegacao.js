// navegacao.js
import { renderRecipes, renderDetail } from './receitas.js';
import { renderCategorias, renderPorCategoria } from './categorias.js';
import { renderSobre } from './sobre.js';
import { renderContato } from './contato.js';

export function setupHashRouting() {
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // chamada inicial
}

function handleHashChange() {
    const hash = window.location.hash;
    const detail = document.getElementById('recipeDetail');
    const container = document.getElementById('recipesContainer');
    const searchInput = document.getElementById('searchInput');
    const btnUltima = document.getElementById('btnUltima');

    if (!hash || hash === "#") {
        detail.style.display = 'none';
        container.style.display = 'grid';
        searchInput.style.display = 'block';
        if (btnUltima) btnUltima.style.display = 'block';

        const termo = searchInput.value || "";
        renderRecipes(termo);
        return;
    }

    if (hash === "#categorias") {
        renderCategorias();
        return;
    }

    if (hash === "#sobre") {
        renderSobre();
        return;
    }

    if (hash === "#contato") {
        renderContato();
        return;
    }

    const matchReceita = hash.match(/^#receita\/(\d+)$/);
    if (matchReceita) {
        const id = parseInt(matchReceita[1]);
        detail.style.display = 'block';
        container.style.display = 'none';
        searchInput.style.display = 'none';
        if (btnUltima) btnUltima.style.display = 'none';
        renderDetail(id);
        return;
    }

    const matchCategoria = hash.match(/^#categoria\/([^/]+)$/);
    if (matchCategoria) {
        const categoriaId = matchCategoria[1];
        renderPorCategoria(categoriaId);
        return;
    }

    // fallback
    detail.innerHTML = "<p>Rota não reconhecida.</p>";
    detail.style.display = 'block';
    container.style.display = 'none';
    searchInput.style.display = 'none';
    if (btnUltima) btnUltima.style.display = 'none';
}