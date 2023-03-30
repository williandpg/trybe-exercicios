let saldo = 100;

function somaSaldo (valor) {
  return valor + saldo;
}

function subtraiSaldo (valor) {
  return valor - saldo;
}

function multiplicaiSaldo (valor) {
  return valor * saldo;
}
  
function divideSaldo (valor) {
  return valor / saldo;
}

console.log(somaSaldo(saldo));
console.log(subtraiSaldo(saldo));
console.log(multiplicaiSaldo(saldo));
console.log(divideSaldo(saldo));