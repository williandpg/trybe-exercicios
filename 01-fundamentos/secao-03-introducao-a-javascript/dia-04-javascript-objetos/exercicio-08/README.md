# Organizando lições

Suponha que você esteja trabalhando em uma escola e precise fazer algumas atualizações no sistema. Para isso, considere o seguinte código:
```sh
let lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

let lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

let lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
```
- Crie uma função para adicionar o turno da noite na `lesson2`. Essa função deve ter três parâmetros: o objeto a ser modificado, a chave a ser adicionada e o valor dela.
- Crie uma função para listar as `keys` de um objeto. Essa função deve receber um objeto como parâmetro.
- Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.
- Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
- Crie um objeto de nome `allLessons`, que deve agrupar todas as aulas por meio do `Object.assign`. Cada chave desse novo objeto será uma aula, portanto essas chaves serão nomeadas `lesson1`, `lesson2` e `lesson3`. Ao executar o comando `console.log(allLessons)`, a saída deverá ser a seguinte:

```sh
console.log(allLessons);
/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/
```
- Com base no objeto elaborado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
- Crie uma função que obtenha o valor da chave de acordo com sua posição no objeto. Por exemplo:
```sh
console.log(getValueByNumber(lesson1, 0));
// Output: 'Matemática'
```
- Crie uma função que verifique se o par chave/valor existe na função. Essa função deve possuir três parâmetros:o objeto, o nome da chave e o valor dela. Por exemplo:
```sh
console.log(verifyPair(lesson3, 'turno', 'noite'));
// Output: true,
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// Output: false
```