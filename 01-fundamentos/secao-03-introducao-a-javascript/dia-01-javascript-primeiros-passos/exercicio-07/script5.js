let peca = "Rei";

switch (peca) {
  case "Peão":
    console.log("Uma casa para frente");
  break;

  case "Torre":
    console.log("Linha reta");
  break;

  case "Bispo":
    console.log("Diagonal");
  break;

  case "Cavalo":
    console.log("Em L")
  break;

  case "Rainha":
    console.log("Quantas casas quiser em qualquer direção");
  break;

  case "Rei":
    console.log("Uma casa em qualquer direção");
  break

  default:
    console.log("Peça nao existe");
}
