# Criando um repositório

Vamos colocar em prática os seus conhecimentos sobre o Git. Para isso, crie um novo diretório em seu computador e realize algumas modificações nele. Observe:

- Crie uma pasta em seu computador;
- Acesse a pasta que você acabou de criar;
- Inicie o versionamento por meio do comando `git init`;
- Abra a pasta no VS Code por meio do comando `code .`;
- Crie um arquivo chamado `README.md`;
- Adicione o arquivo novo em _staging_ e realize um _commit_, como em `git add .` e `git commit -m "Descreva a alteração realizada"`;
- Crie uma nova _branch_ por meio do comando `git checkout -b`, como em `git checkout -b adiciona-readme`;
- Faça uma alteração em `README.md` e, depois, realize um novo _commit_, como em `git add .` e `git commit -m "Alterando o README"`;
- Retorne para a _branch main_ e, em seguida, realize o merge das alterações por meio do comando `git merge nome-da-branch`, como em `git merge adiciona-readme`.

Como você já criou a pasta e “mergeou” as alterações, vamos avançar e criar novas _branches_. Faça os exercícios a seguir.

## Exercícios

- Acesse a _branch_ main e crie uma _branch_ nova chamada `atualiza-readme`.

- Acesse a _branch_ `atualiza-readme` e crie um arquivo chamado `infos.txt`.

- Adicione as alterações em _staging_ e realize um _commit_.

- Adicione seu nome e sobrenome ao arquivo `infos.txt`.

- Adicione novamente as alterações em _staging_ e realize um _commit_.

- Crie uma _branch_ nova a partir da _branch_ `atualiza-readme`. A nova _branch_ deve se chamar `adiciona-infos`.

- Acesse a _branch_ `adiciona-infos` e utilize sua criatividade para escrever o passo a passo de como o versionamento funciona no `README.md`. Por exemplo: “O primeiro passo é ter uma pasta versionada e criar um estrutura inicial, e fazemos isso utilizando o comando `git init`. O segundo passo é criar uma branch nova com o comando `git branch nome-da-branch` ou `git checkout -b nome-da-branch`…” Você pode, também, utilizar esse momento para registrar, em forma de perguntas e respostas, as dúvidas que ainda tiver sobre versionamento.

- Adicione as alterações em _staging_ e realize o _commit_.

- Volte para a _branch_ `atualiza-readme` e realize o _merge_ das alterações feitas na _branch_ `adiciona-infos`.

- Retorne para a _branch main_ e realize o merge das alterações.