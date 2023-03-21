# Manipulação e busca

## Parte I

_De olho na dica 👀: Crie um novo diretório chamado `unix_tests_search` e navegue até ele._

Na pasta `unix_tests_search`, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando `curl`. Conheça mais sobre esse comando nesse [link](https://linux.die.net/man/1/curl).

```sh
mkdir unix_tests_search
cd unix_tests_search
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"
```

- Mostre todo o conteúdo do arquivo `countries.txt` na tela.
- Mostre o conteúdo de `countries.txt`, página por página, até encontrar a `Zambia`.
- Mostre novamente o conteúdo de `countries.txt` página por página, mas agora utilize um comando para buscar por `Zambia`.
- Busque por `Brazil` no `countries.txt`.
- Busque novamente por `brazil`, mas agora utilize o _lower case_ e não considere letras maiúsculas ou minúsculas.

## Parte II

_De olho na dica 👀: Crie um novo arquivo chamado `phrases.txt` e adicione algumas frases à sua escolha. Não é necessário criar o arquivo pelo terminal._

- Busque pelas frases que não contenham a palavra `fox`.
- Conte o número de palavras do arquivo `phrases.txt`.
- Conte o número de linhas do arquivo `phrases.txt`.

## Parte III

_De olho na dica 👀: Para contar o número de caracteres de um arquivo, não use `wc -c`, e sim `wc -m`._

- Crie os arquivos `empty.tbt` e `empty.pdf`.
- Liste todos os arquivos do diretório `unix_tests_search`.
- Liste todos os arquivos que terminem com `.txt`.
- Liste todos os arquivos que terminem com `.tbt` ou `.txt`.
- Acesse o manual do comando `ls`.
