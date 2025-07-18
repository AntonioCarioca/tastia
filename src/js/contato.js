// contato.js
export function renderContato() {
    const detail = document.getElementById('recipeDetail');
    const container = document.getElementById('recipesContainer');
    const searchInput = document.getElementById('searchInput');
    const btnUltima = document.getElementById('btnUltima');

    container.style.display = 'none';
    searchInput.style.display = 'none';
    if (btnUltima) btnUltima.style.display = 'none';

    detail.style.display = 'block';
    detail.innerHTML = `
        <div class="contact-content">
            <h2 class="contact-title">Entre em Contato</h2>
            <form id="contactForm">
                <input type="hidden" name="title" value="Contato pelo site">
                <input type="hidden" name="time" value="${new Date().toLocaleString()}">

                <label for="name">Nome:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>

                <label for="mensagem">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" rows="5" required></textarea>

                <button type="submit">Enviar</button>
            </form>
            <div id="mensagemStatus"></div>
        </div>
    `;

    const form = document.getElementById("contactForm");
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        emailjs.sendForm("service_gwws453", "template_7k5nvjg", form)
            .then(function() {
                document.getElementById("mensagemStatus").innerHTML = `
                    <p style="color: green;">Mensagem enviada com sucesso!</p>
                `;
                form.reset();
            }, function(error) {
                document.getElementById("mensagemStatus").innerHTML = `
                    <p style="color: red;">Erro ao enviar: ${error.text}</p>
                `;
            });
    });
}