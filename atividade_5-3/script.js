document.addEventListener("DOMContentLoaded", function () {
    // Método simples: usando innerHTML
    document.getElementById("titulo").innerHTML = "FastBuy";

    // Método complexo: criando elementos dinamicamente e adicionando ao DOM
    const produtoContainer = document.getElementById("produto-container");

    // Criando elementos
    const produtoTitulo = document.createElement("h2");
    const produtoDescricao = document.createElement("p");
    const produtoPreco = document.createElement("p");
    const produtoImagem = document.createElement("img");

    // Adicionando conteúdo aos elementos
    produtoTitulo.innerText = "IPHONE 15 PRO MAX";
    produtoDescricao.innerText = "Agora de Titânio.O iPhone definitivo!Conheça o iPhone 15 Pro Max de Titânio, feito com material aeroespacial, um desempenho bruto para jogos e atividades complexas e uma câmera feita para verdadeiras produções cinematográficas. Prepare-se para ter a experiência definitiva de um Pro. Robusto, leve e muito Pro, este é o primeiro iPhone com design e acabamento feito em titânio aeroespacial, a mesma liga usada nas espaçonaves, sendo os modelos Pro mais leves até hoje.";
    produtoPreco.innerText = "Preço: R$ 8.559,90";
    produtoImagem.src = "https://classic.exame.com/wp-content/uploads/2023/09/iphone-15-pro-cores-Buscape.webp?w=895";
    produtoImagem.alt = "Imagem do Celular Apple Iphone, com diversas cores: preto, branco(estelar), azul(grafite), gray(cinza)";

    // Adicionando elementos ao contêiner do produto
    produtoContainer.appendChild(produtoTitulo);
    produtoContainer.appendChild(produtoDescricao);
    produtoContainer.appendChild(produtoPreco);
    produtoContainer.appendChild(produtoImagem);
});
