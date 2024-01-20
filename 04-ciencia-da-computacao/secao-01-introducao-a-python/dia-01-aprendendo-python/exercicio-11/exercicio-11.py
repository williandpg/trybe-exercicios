# A estrutura mais recomendada para armazenar a contagem da frequência que um elemento aparece em uma sequência é o ``Dict``.

# Veja abaixo uma possível solução para essa questão:

my_array = [20, 20, 1, 2]

freq_dict = {}

for item in my_array:
    if (item in freq_dict):
        freq_dict[item] += 1
    else:
        freq_dict[item] = 1

for key, valor in freq_dict.items():
    print(f"{key} : {valor}")

# Saída
20: 2
1: 1
2: 1
