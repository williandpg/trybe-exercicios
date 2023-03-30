let angulo1 = 170;
let angulo2 = 22;
let angulo3 = -32;

let angulos = angulo1 + angulo2 + angulo3;

if (angulos < 180 && angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
  console.log("true")
} else if (angulos >= 180) {
  console.log("false")
} else {
  console.log("Erro")
}