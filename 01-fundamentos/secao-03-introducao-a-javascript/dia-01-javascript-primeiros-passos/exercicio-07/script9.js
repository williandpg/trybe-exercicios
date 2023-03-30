let custo = 5;
let venda = 23;

let produtosVendidos = 1000;

if (produtosVendidos >= 1000) {
  console.log("O lucro da empresa foi  de: " + (venda - custo) * produtosVendidos);
} else {
  console.log("Não foi vendido o esperado")
}