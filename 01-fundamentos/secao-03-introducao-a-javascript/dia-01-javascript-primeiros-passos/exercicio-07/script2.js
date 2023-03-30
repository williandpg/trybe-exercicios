let num1 = 10;
let num2 = 32;
let num3 = 23;

if (num1 > num2 && num1 > num3) {
  console.log("O primeiro número é o maior")
} else if (num2 > num1 && num2 > num3) {
  console.log("O segundo número é o maior")
} else if (num3 > num1 && num3 > num2) {
  console.log("O terceiro número é o maior")
} else {
  console.log("Tem dois ou mais números iguais")
}