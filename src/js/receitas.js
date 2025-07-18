// receitas.js
export let recipes = [];

export function loadRecipes(callback) {
    fetch('dados/receitas.json')
        .then(response => response.json())
        .then(data => {
            recipes = data;
            callback();
        })
        .catch(error => {
            console.error('Erro ao carregar receitas:', error);
            recipes = [];
            callback();
        });
}

export function renderRecipes(filter = "") {
    const container = document.getElementById('recipesContainer');
    container.innerHTML = '';

    recipes
        .filter(recipe => recipe.title.toLowerCase().includes(filter.toLowerCase()))
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

export function renderDetail(id) {
    const recipe = recipes[id];
    const detail = document.getElementById('recipeDetail');

    if (!recipe) {
        detail.innerHTML = "<p>Receita não encontrada.</p>";
        return;
    }

    localStorage.setItem("ultimaReceita", id);

    detail.innerHTML = `
        <div class="detail-wrapper">
            <div class="recipe-header">
                <div>
                    <h2>${recipe.title}</h2>
                    <p><strong>Categoria:</strong> ${recipe.category}</p>
                </div>
                <img src="${recipe.image}" alt="${recipe.title}">
            </div>

            <h3>Ingredientes</h3>
            <ul>
                ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join("")}
            </ul>

            <h3>Modo de Preparo</h3>
            <ol>
                ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
            </ol>

            <button id="backButton">← Voltar</button>
        </div>
    `;

    document.getElementById('backButton').onclick = () => {
        window.location.hash = '';
    };
}