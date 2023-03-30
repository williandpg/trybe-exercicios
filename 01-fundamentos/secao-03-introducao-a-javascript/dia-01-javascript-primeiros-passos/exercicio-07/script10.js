let INSS;
let IR;

let salarioBruto = 2000.00;

if (salarioBruto <= 1556.94) {
  INSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  INSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  INSS = salarioBruto * 0.11;
} else {
  INSS = 570.88;
}

let salarioLiquido = salarioBruto - INSS;

if (salarioLiquido <= 1903.98) {
  IR = 0;
} else if (salarioLiquido <= 2826.65) {
  IR = (salarioLiquido * 0.075) - 142.80;
} else if (salarioLiquido <= 3751.05) {
  IR = (salarioLiquido * 0.15) - 354.80;
} else if (salarioLiquido <= 4664.68) {
  IR = (salarioLiquido * 0.225) - 636.13;
} else {
  IR = (salarioLiquido * 0.275) - 869.36;
};

console.log("Salário: " + (salarioLiquido - IR));
