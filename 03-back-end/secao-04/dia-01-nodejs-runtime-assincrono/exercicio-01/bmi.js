const readlineSync = require("readline-sync");

const weight = readlineSync.question("What's your weight? ");
const height = readlineSync.questionFloat("What's your height? ");

const bmi = (weight, height) => {
    const bmiValue = weight / height ** 2;
    if (bmiValue < 18.5) {
        console.log("Abaixo do peso (magreza)");
        return;
    }
    if (bmiValue >= 18.5 && bmiValue < 25) {
        console.log("Peso normal");
        return;
    }
    if (bmiValue >= 25 && bmiValue < 30) {
        console.log("Acima do peso (sobrepeso)");
        return;
    }
    if (bmiValue >= 30 && bmiValue < 35) {
        console.log("Obesidade grau I");
        return;
    }
    if (bmiValue >= 35 && bmiValue < 40) {
        console.log("Obesidade grau II");
        return;
    }
    console.log("Obesidade graus III e IV");
    return;
}

console.log (`Seu BMI para uma altura de ${height} e peso de ${weight} é de ${bmi(weight, height)}`);
