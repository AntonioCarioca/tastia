// main.js
import { loadRecipes } from './receitas.js';
import { loadCategorias } from './categorias.js';
import { configurarBusca, configurarUltima } from './armazenamento.js';
import { setupHashRouting } from './navegacao.js';

window.addEventListener('load', () => {
    loadRecipes(() => {
        loadCategorias(() => {
            configurarBusca();
            configurarUltima();
            setupHashRouting();
        });
    });
});