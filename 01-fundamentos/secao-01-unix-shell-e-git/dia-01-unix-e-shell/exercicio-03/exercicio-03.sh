mkdir unix_tests_search

cd unix_tests_search

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

cat countries.txt

less countries.txt

# Utilizar teclas n para proximo(next) e p para anterior(previous) para navegar

grep "Brazil" countries.txt

grep "brazil" countries.txt

# Criando arquivo que sera usado para os proximos exercicios

touch phrases.txt

grep -v "fox" phrases.txt

cat phrases.txt | wc -w

cat phrases.txt | wc -l

# Continuação

touch empty.tbt empty.pdf

ls -a

ls -a *.txt

ls -a *.{tbt,txt}

man ls