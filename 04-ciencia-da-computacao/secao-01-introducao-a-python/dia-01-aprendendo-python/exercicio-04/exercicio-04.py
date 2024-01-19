preco_de_capa_livro = 24.20 #Livrarias tem desconto de 40%
transporte_primeiro = 3.00
transporte_adicional = 0.75
quantidade_de_livros = 60

preco_total = (((preco_de_capa_livro * 0.6) * quantidade_de_livros) + transporte_primeiro + (transporte_adicional * (quantidade_de_livros - 1)))

print(preco_total)
