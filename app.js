const produtos = [{
  nome: "Arroz integral",
  preco: 8.9
},
{
  nome: "Feijão carioca",
  preco: 7.2
},
{
  nome: "Leite",
  preco: 5.4
},
{
  nome: "Banana",
  preco: 6.3
},
{
  nome: "Aveia",
  preco: 9.5
},
];
const escolhidos = [];
const areaProdutos = document.querySelector("#produtos");
function reais(valor) {
  return valor.toLocaleString("pt-BR",
  {
    style: "currency",
    currency: "BRL"
  });
}
function atualizarCarrinho() {
  const lista = document.querySelector("#carrinho");
  lista.replaceChildren(...escolhidos.map((produto) => {
    const item = document.createElement("li");
    item.textContent = `${produto.nome} — ${reais(produto.preco)}`;
    return item;
  }),
  );
  const total = escolhidos.reduce((soma,
  produto) => soma + produto.preco,
  0);
  document.querySelector("#total strong").textContent = `Total: ${reais(total)}`;
}
produtos.forEach((produto) => {
  const cartao = document.createElement("div");
  cartao.className = "cartao";
  const nome = document.createElement("strong");
  nome.textContent = produto.nome;
  const preco = document.createElement("p");
  preco.textContent = reais(produto.preco);
  const botao = document.createElement("button");
  botao.type = "button";
  botao.textContent = "Adicionar";
  botao.addEventListener("click",
  () => {
    escolhidos.push(produto);
    atualizarCarrinho();
  });
  cartao.append(nome,
  preco,
  botao);
  areaProdutos.append(cartao);
});
document.querySelector("#limpar").addEventListener("click",
() => {
  escolhidos.length = 0;
  atualizarCarrinho();
});
atualizarCarrinho();



