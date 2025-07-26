# 🍲 Tastia

Tastia é um template moderno, leve e responsivo desenvolvido para projetos de sites de receitas. Ele combina uma estética rústica e acolhedora com uma paleta de cores inspirada na natureza e nos sabores da cozinha brasileira, trazendo tons como laranja queimado, verde musgo e amarelo mostarda.

[![tastia-capa.png](https://i.postimg.cc/4N34DqYn/tastia-capa.png)](https://postimg.cc/vDpd9PLd)


## 🎨 Paleta de Cores

| Cor | Nome | Hex |
|-----|------|-----|
| 🔴 | Laranja queimado | `#da4a16` |
| 🟠 | Laranja vibrante | `#e97f37` |
| ⚪ | Bege claro | `#e9e1cc` |
| ⚫ | Marrom escuro | `#3a2813` |
| 🟢 | Verde oliva | `#7c9440` |
| 🟡 | Amarelo mostarda | `#dcbd41` |
| 🟢 | Verde musgo | `#476021` |
| 🔴 | Vermelho tomate | `#d33f35` |

## ⚙️ Tecnologias Utilizadas

- HTML5
- CSS3 com variáveis customizadas
- JavaScript Vanilla
- EmailJS (para formulário de contato)
- Google Fonts (fonte personalizada)
- Estrutura de dados JSON (categorias e receitas)
- Responsividade com media queries

## 🚀 Como Usar

1. Clone o repositório:

   ```bash
   git clone https://github.com/AntonioCarioca/tastia.git
   cd template-receitas
   ```
2. Abra o arquivo index.html no navegador.

3. Edite os arquivos JSON em /dados/ para adicionar suas próprias receitas e categorias.

4. Configure o formulário de contato com seu EmailJS.

## 📩 Formulário de Contato

Este template já inclui um formulário de contato funcional usando o EmailJS.

Basta configurar seu Service ID, Template ID e variáveis em contato.js.

## 📩 Como Configurar o Formulário com EmailJS

Este template já possui um formulário de contato pronto usando [EmailJS](https://www.emailjs.com/). Basta seguir os passos abaixo para ativá-lo:

### ✅ Passo a Passo

1. Crie uma conta no EmailJS
	- Acesse: https://www.emailjs.com/
	- Crie sua conta gratuita.
2. Adicione um novo serviço de e-mail
	- Vá para o painel da sua conta.
	- Clique em "Email Services" > "Add New Service".
	- Conecte com seu provedor de e-mail (Gmail, Outlook, etc).
3. Crie um novo template
	- Vá em Email Templates.
	- Crie um novo template com os campos esperados:
		- `name`, `email`, `message` (esses nomes devem bater com o seu HTML).

		[![email-tastia-template.png](https://i.postimg.cc/SQXQ00ZD/email-tastia-template.png)](https://postimg.cc/G9CnYfny)

4. Copie suas credenciais
	- No painel, copie:
		- Service ID
		- Template ID
		- Public Key (API Key)
5. No `index.html` coloque a sua `PUBLIC_KEY`

	Abra o arquivo `index.html` e substitua as variáveis com as suas credenciais:

	[![publickey-email.png](https://i.postimg.cc/HL73DkyT/publickey-email.png)](https://postimg.cc/VSmXX1gh)
6. No `contato.js` coloque as credenciais `Service ID` `Template ID`

	Abra o arquivo js/contato.js e substitua as variáveis com as suas credenciais:

	[![templatekeys.png](https://i.postimg.cc/t4myv2hL/templatekeys.png)](https://postimg.cc/JsJ9G3Yq)

7. Pronto!
	- O formulário do seu site agora envia e-mails diretamente para você via EmailJS.
	- Teste localmente ou em produção.