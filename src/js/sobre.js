// sobre.js
export function renderSobre() {
    const detail = document.getElementById('recipeDetail');
    const container = document.getElementById('recipesContainer');
    const searchInput = document.getElementById('searchInput');
    const btnUltima = document.getElementById('btnUltima');

    // Oculta outros elementos
    container.style.display = 'none';
    searchInput.style.display = 'none';
    if (btnUltima) btnUltima.style.display = 'none';

    // Mostra conteúdo do sobre
    detail.style.display = 'block';
    detail.innerHTML = `
        <div class="about-content">
            <h2>Sobre o Projeto</h2>
            <p><strong>Tastia</strong> é um site de receitas desenvolvido com HTML, CSS e JavaScript puro.</p>
            <p>O projeto utiliza arquivos JSON para gerenciar receitas e categorias, e navegação com hash para exibir páginas sem recarregar.</p>

            <h3>Autor</h3>
            <p>Antonio Silva</p>

            <h3>Repositório</h3>
            <p>
                <a href="https://github.com/AntonioCarioca/tastia" target="_blank" rel="noopener">
                    <img src="https://img.shields.io/badge/GitHub-Ver%20no%20reposit%C3%B3rio-181717?style=for-the-badge&logo=github&logoColor=white&logoSize=auto" alt="Ver no GitHub" style="width: auto;" />
                </a>
            </p>
        </div>
    `;
}