//Conceito de Algorítmo 21.06.19
/*
- sequência de passos para sair de determinado ponto e ir para outro-
(dentro dessa sequência de passos temos o conceito de repetição)
(integração entre algorítmos e os dados)
algoritmo > processamento > ação > o verbo
dados > entradas que vão alimentar os algorítmos
Os algorítmos eventualmente vão alimentar algum tipo de saída.
temos um conjunto de entradas ex. leite, fermento..
temos no final ago gerado na saída > o bolo

midia player
entrada > mídia
saída > audio (executado no auto falante)
      > imagem (executado na tela)


- existem algorítmos que recebem entrada mas não geram saída

- existem algorítmos sem entrada e sem saída e não geram resultado

Podemos representar algorítmos por fluxogramas, com linguagens naturais, linguagens artificiais, pseudo-linguagem. 

algorítmo X linguagem de programação
(existem linguagens mais próximas do computador _linguagens de baixo nível_ e existem linguagens mais próximas de ser humano _linguagens de alto nível_)


===========================================================
- Estruturas de Dados -

Dados:
3 , # , 9.13, true, 1, 2, "texto", p

Estrutura de dados:

A estrutura de dados visa organizar a administrar os seus dados, ou seja, trazer ordem e estrutura para os dados.
ex. saiu a lista dos aprovados
(o que dita uma organização é a lista, uma lista remete a organiação, sequência, pode ser uma lista de supermercado _não ordenada_, lista de aprovados para vestibular _lista ordenada_)

o número três é um dado, mas os números inteiros (o que dá regra, que diz que começa apartir do zero e que em ordem discreta(contínuo) vai seguir de um em um ou de menos um a menos um, teremos os números inteiros e uma regra dos dados, assim conseguimos uma validação e organização em cima disso.
Então quando temos um número inteiro e aquele elemento está aderente a uma determinada estrutura de dados, temos que respeitar aquela estrutura para não batermos em outro tipo de dado, ex um número real, ou não iremos conseguir pois a linguagem de programação pode nos barrar.

Temos linguagens que vão trabalhar os tipos de forma muito mais flexivel (linguagens de tipagem dinâmica) _inteiro, strings , listas_ assim podemos ter determidado dado apontando para diferentes tipos em diferentes momentos
Temos algumas linguagens com validações muito mais rigidas, caso crie um determianda variável com um tipo inteiro obrigatoriamente ela deverá ser assim durante todo o seu algorítmo, os dados podem mmudar, porém a natureza não.

Logo as estruturas organizam e administram os dados, e temos um conjunto de estruturas de dados também no mundo real.

FIFO > lógica > first in fisrt out > o primeiro a entrar e o primeiro a sair, o segundo a entrar e o segundo a sair

pilha segue uma estrutura de dado LIFO
last in first out
o último a entrar na pilha é o primeiro a sair


temos estruturas de dados de árvores
sistemas de arquivos do computador windows explorer, finder no Mac
pastas e subpasta

Tabelas, estrutura de dados organizados em linhas em colunas, assim como o banco de dados é organizado _estrutura de dados clássica_

Estruturas de dados primárias, que são os blocos de construção de qualquer outra estrutura, estes são:
- números inteiros
- números reais
- letras
- valores boleanos
- sequência de letras 
_dependendo da linguagem trabalhamos uma sequência de letras como algo como uma estrutura básica e algumas outras linguagens trabalhamos com um nível secundário_
Java trata a letra como algo primitivo _bloco de construção básico dos dados_
e a sequência de caracteres o Java trata como objeto.

Algumas linguagens não tratam  uma estrutura de dados como pontos flutuantes e outra como inteiros, no javascript tudo é number _única estrutura básica para representar números_.

Quando imaginamos estruturas mais complexas, como existem estruturas de dados personalizadas _o próprio usuário cria dentro da aplicação_ , ex. criar algo para reprezentar um cliente, teremos uma estrutura
 personalizada que irá conter outras estruturas básicas para compor um cliente.

 cliente cod tipo inteiro
 cliente status , representado em letras a > ativo , i > inativo
 nome > sequência de letras
 data de cadastro > inteiro  dia/mes/ano/hora
 
Dentro de toda linguagem, temos o conceito de variáveis e constantes.
armazenamos os dados em variáveis e constantes e isso serve para que possamos rotular um determinado valor na variável do computador e assim podemos rotular um determinado valor que estará armazenado na memória do computador
ex. valor reprezenta o PI > 2.1415... valor constante

Armazenamos os dados em variáveis e constantes, os dados serão regidos pelas estruturas de dados que irá dar ordem, que irá administrar os dados dizendo como os dados precisam se comportar para estar aderente aquela estrutura de dados e teremos os dados também para fazer operações, atribuindo determinado dado a uma variável, faremos operações aritméticas em cima de um dado numérico (somar, subtrair, dividir, multiplicar), teremos operações RELACIONAS _operações de comparação_, teremos também operações lógicas usando suas variávies _operações com condições_
OPERAÇÕES:
- atribuição
- aritméticas
- relacionais
- lógicas
- juntar duas listas 

a partir de estruturas mais báscicas podemos criar estruturas personalizadas para poder atender o seu sistema
_estruturas personalizadas_
- cliente
- produto

*/