// categorias.js
import { recipes } from './receitas.js';

export let categorias = [];

export function loadCategorias(callback) {
    fetch('dados/categorias.json')
        .then(res => res.json())
        .then(data => {
            categorias = data;
            if (callback) callback();
        })
        .catch(err => {
            console.error("Erro ao carregar categorias:", err);
        });
}

export function renderCategorias() {
    const detail = document.getElementById('recipeDetail');
    const container = document.getElementById('recipesContainer');
    const searchInput = document.getElementById('searchInput');
    const btnUltima = document.getElementById('btnUltima');

    container.style.display = 'none';
    detail.style.display = 'grid';
    detail.className = 'recipe-grid';
    searchInput.style.display = 'none';
    if (btnUltima) btnUltima.style.display = 'none';

    detail.innerHTML = categorias.map(cat => `
        <div class=\"recipe-card\">
            <a href=\"#categoria/${cat.id}\" class=\"recipe-link\">
                <img src=\"${cat.image}\" alt=\"${cat.nome}\">
                <h2>${cat.nome}</h2>
                <p>Ver receitas de ${cat.nome}</p>
            </a>
        </div>
    `).join('');
}

export function renderPorCategoria(categoriaId) {
    const categoria = categorias.find(cat => cat.id === categoriaId);
    const container = document.getElementById('recipesContainer');
    const detail = document.getElementById('recipeDetail');
    const searchInput = document.getElementById('searchInput');
    const btnUltima = document.getElementById('btnUltima');

    if (!categoria) {
        detail.innerHTML = "<p>Categoria não encontrada.</p>";
        detail.style.display = 'block';
        container.style.display = 'none';
        return;
    }

    detail.style.display = 'none';
    container.style.display = 'grid';
    searchInput.style.display = 'none';
    if (btnUltima) btnUltima.style.display = 'none';

    container.innerHTML = `<h2>Receitas de ${categoria.nome}</h2>`;

    recipes
        .filter(recipe => recipe.category.toLowerCase() === categoria.nome.toLowerCase())
        .forEach((recipe, index) => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `
                <a href=\"#receita/${index}\" class=\"recipe-link\">
                    <img src=\"${recipe.image}\" alt=\"${recipe.title}\">
                    <h2>${recipe.title}</h2>
                    <p>${recipe.description}</p>
                </a>
            `;
            container.appendChild(card);
        });
}