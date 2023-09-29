const readline = require('readline-sync');

function handleFibonacci(quantity) {
  let n1 = 1;
  let n2 = 1;
  for (let n = quantity; n >= 0; n -= 1) {
    if (n2) console.log(n2);
    const temp = n1;
    n1 += n2;
    n2 = temp;
  }
  console.log(n2);
  return n2;
}

function main() {
  const n = readline.questionInt('Enter \'n\' value: ');
  if (n <= 0) {
    console.log('Enter a number greater then \'0\'!');
    return;
  }
  console.log(`n: ${n}`);
  handleFibonacci(n - 2);
}

main();