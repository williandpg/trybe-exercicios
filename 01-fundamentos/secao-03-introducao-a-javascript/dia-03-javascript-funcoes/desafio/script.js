// Vamos criar um projeto que será capaz de ler/receber três valores 
// inteiros e testar se são positivos. Em seguida, verifica se formam 
// um triângulo e, caso isso seja possível, verifica qual é o tipo de triângulo, 
// além de calcular o seu perímetro. Ao final, 
// uma mensagem deverá ser impressa na saída do console. 

// Ufa... E aí, aceita o desafio?

// Dados iniciais do desafio
// Valores dos lados em cm
let lado1 = 9;
let lado2 = 7;
let lado3 = 8;

// 1. Crie uma função `checkIntegerPositive` que verifica se os valores 
//    dos lados são inteiros e positivos.
// - a condição é que todos os valores dos lados devem ser maiores que zero;
// - a função deve receber 3 parâmetros (l1, l2, l3);
// - dica: use o operador E (&&);
// - se a condição for satisfeita, a função deve retornar true;
// - se a condição não for satisfeita, a função deve retornar false. 

// 2. Crie uma função `checkItsATriangle` que verifica se os valores dos 
//    lados formam um triângulo.
// - a condição é que o valor de um lado deve sempre ser menor 
//   que a soma dos valores dos outros dois lados, ou seja, 
//   l1 < l2 + l3 e l2 < l1 + l3 e l3 < l1 + l2.
// - a função deve receber 3 parâmetros (l1, l2, l3); 
// - dica: use o operador E (&&);
// - se a condição for satisfeita, a função deve retornar true;
// - se a condição não for satisfeita, a função deve retornar false.

// 3. Crie uma função `checkWitchTriangle` que verifica qual é o tipo do triângulo.
// - a função deve receber 3 parâmetros (l1, l2, l3); 
// - Retorna a string `escaleno`, se todos os lados tiverem valores diferentes;
// - Retorna a string `isósceles`, se dois lados tiverem valores iguais e um lado tiver valor diferente
// - Retorna a string `equilátero`, se todos os lados tiverem valores iguais.
// - dica: use o operador E (&&);

// 4. Crie uma função `checkPerimeterTriangle` que 
//   calcula o perímetro do triângulo.
// - a função deve receber 3 parâmetros (l1, l2, l3); 
// - o perímetro do triângulo deve ser calculado como: perimetro = l1 + l2 + l3;
// - a função deve retornar o perimetro.

// 5. Crie uma função `infoTriangle` que irá apresentar 
//    uma mensagem na saída do console.
// - a função deve receber 3 parâmetros (l1, l2, l3); 
// - a função deve verificar se os valores dos lados são inteiros 
//   positivos e se os valores dos lados formam um triângulo. 
//   Dica: você já criou as funções que fazem esta verificação 
//   (checkIntegerPositive() e checkItsATriangle()). 
//   Basta chamá-las aqui. Que tal colocar os resultados dentro de variáveis e 
//   depois usá-las na estrutura do IF?
// - se a condição for satisfeita, a função deve retornar a 
//   mensagem: `O triângulo é <tipo-do-triângulo> e seu perímetro 
//   vale <valor-do-perimetro> cm.`. 
//   Dica: chame a função checkWitchTriangle() para obter <tipo-do-triângulo> e 
//   a função checkPerimeterTriangle() para obter <valor-do-perimetro>;
// - se a condição não for satisfeita, a função deve retornar a 
//   mensagem: `Não é um triângulo.`.

// OBS: o console.log final deverá ser assim: 
// console.log(infoTriangle(lado1, lado2, lado3)); Tudo deve acontecer depois de sua execução...