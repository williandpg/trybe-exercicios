# Objetos e for/in

Com base neste objeto, faça os exercícios a seguir.

```sh
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```
1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo o nome dela. Para isso, utilize a sintaxe meuObjeto.chave. Então, o valor esperado no console é:

```sh
Bem-vinda, Margarida
```
2 - Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Para isso, use a sintaxe meuObjeto['chave'] = valor. Então, o valor esperado no console é:

```sh
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
```
3 - Faça um for/in que mostre todas as chaves do objeto. O valor esperado no console é:

```sh
personagem
origem
nota
recorrente
```
4 - Faça um novo for/in, mas agora mostre todos os valores das propriedades do objeto. O valor esperado no console é:

```sh
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
```
5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: “Tio Patinhas”, “Christmas on Bear Mountain, Dell’s Four Color Comics #178”, “O último MacPatinhas”, “Sim”. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. O valor esperado no console é:

```sh
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
```