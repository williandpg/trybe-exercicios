# Exercícios - agora, a prática

Adicione uma propriedade flex-basis ao container do logotipo com o tamanho de 268px, e para o container do menu adicione a mesma propriedade com o tamanho de 500px. 

Adicione uma propriedade Flexbox que modifique a ordem em que o logo e os itens do menu aparecem na tela. 

Adicione uma propriedade Flexbox que faça o container do menu crescer, quando houver espaço disponível. 

Utilize a propriedade align-self no elemento correto para que o header da página tenha o seguinte comportamento:
const button = document.querySelector('#send-button');

button.addEventListener('click', () => {
  const name = document.querySelector('#name-id').value;
  const number = document.querySelector('#number-id').value;

  showPromo(name, number);
});

const showPromo = (name, number) => {
  const firstText = document.querySelector('#text-initial');
  const secondText = document.querySelector('#text-final');
  const productObject = checkNumber(parseInt(number));

  firstText.innerHTML = `Boas-vindas, ${name}!`;
  secondText.innerHTML = `A promoção do dia é: 
    ${productObject.product} no valor de R$ ${productObject.price}`;
}

// Segunda parte
const checkNumber = (number) => {
  return promo[number - 1];
}