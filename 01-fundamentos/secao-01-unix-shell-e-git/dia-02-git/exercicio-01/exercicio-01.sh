mkdir trybe

cd trybe

git init

code .

touch README.md

git add .

git commit -m "Iniciando o Readme"

git checkout -b adiciona-readme

echo "Mudança" > README.md

git add .

git commit -m "Alterando o README"

git checkout main

git merge adiciona-readme

# Exercicio

git checkout -b atualiza-readme

touch infos.txt

git add .

git commit -m "Adicionando o Infos"

echo "Willian de Paula Gonaçalves" > infos.txt

git add .

git commit -m "Adicionando nome e sobrenome"

git checkout -b adiciona-infos

echo "O primeiro passo é ter uma pasta versionada e criar um estrutura inicial, e fazemos isso utilizando o comando git init. O segundo passo é criar uma branch nova com o comando git branch nome-da-branch ou git checkout -b nome-da-branch…" > README.md

git add .

git commit -m "Adicionando passo a passo ao Readme"

git checkout atualiza-readme

git merge adiciona-infos

git checkout main

git merge atualiza-readme