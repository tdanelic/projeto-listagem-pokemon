/*
	O que precisamos fazer? - quando clicarmos no botão de troca de tema, podemos alterar que a cor do tema da página para as cores do tema claro ou do tema escuro
	- objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe modo-escuro no corpo pra que os estilos do modo escuro sejam aplicados e mudem a imagem para lua
        - passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
        - passo 2 - dar um jeito de pegar no JS o elemento HTML corresponde ao corpo
        - passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
        - passo 4 - adicionar a classe modo-escuro no corpo
        - passo 5 - trocar a imagem do botão de alterar tema para lua
    
	- objetivo 2 - quando clicar no botão de troca de tema, caso o corpo já tenha a classe modo-escuro, remova a classe pra mudar pro modo claro e mudar a imagem pro sol
        - passo 6 - verifique se o corpo já tem a classe modo-escuro
        - passo 7 - remover a classe do modo-escuro do corpo
        - passo 8 - trocar a imagem do botão de alterar tema para sol
*/

const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
