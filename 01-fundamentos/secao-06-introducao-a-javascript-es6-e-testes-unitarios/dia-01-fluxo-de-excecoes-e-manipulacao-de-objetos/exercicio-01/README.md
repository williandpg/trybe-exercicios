Imagine que a Trybe Sporting Goods, loja de artigos esportivos da Trybe, contratou você para desenvolver uma aplicação em que uma pessoa informa o próprio nome e um número de 1 a 10. Esse sistema deve verificar o número informado e associar a ele uma promoção do dia, entre dez promoções cadastradas, e mostrar à pessoa uma mensagem contendo essa promoção.

Muito bem! Agora, rode o live server e observe o resultado. Note que foram criados dois inputs do tipo text e um botão. Além disso, ainda não visíveis, há dois parágrafos que receberão textos conforme os dados forem inseridos nos inputs e o botão for clicado. O primeiro mostrará uma mensagem de boas-vindas na página e o outro apresentará a promoção.

Agora, é momento de colocar o JavaScript em ação!

Com base no que você já aprendeu até aqui, o código para resolver esse problema ficaria desta forma (ou similar):

Até aqui, nenhuma novidade, não é mesmo? Você capturou o botão, adicionou um evento de click nele, chamou a função showPromo, que é responsável por inserir as mensagens de boas-vindas e da promo na página, e, ainda, dentro dessa função, chamou uma função checkNumber, que verifica se o valor inserido no input é do tipo number.

Faça o teste inserindo um nome e um número nos campos de input.

Tudo funcionando corretamente! Porém, é preciso considerar que os valores inseridos podem não ser os esperados, por exemplo:

O input de nome pode estar recebendo:
um valor diferente de uma string;
nenhum valor.
O input de número pode estar recebendo:
um valor diferente de um number;
um valor abaixo de 1 ou acima de 10;
um valor não inteiro;
nenhum valor.

E você tem razão! É mesmo possível solucionar dessa maneira. Entretanto, observe que esses são problemas previsíveis. Como você resolveria problemas imprevisíveis? Observe este exemplo:

os objetos que contêm as promoções estão armazenados em um banco de dados que não está disponível no momento;
o servidor que faz conexão com seu computador (local) está fora do ar e, por isso, não consegue interpretar quais valores você informou nos inputs da página.
Nesses casos, e também em muitos outros, como seria possível prever o tipo de erro para poder tratá-lo e também devolver uma mensagem para a pessoa que quer consultar a promo?

O fluxo de exceção ajuda a tratar erros previsíveis e imprevisíveis.