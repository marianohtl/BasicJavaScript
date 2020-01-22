/*
Algoritmos e Dados

Os dados são organizados em uma estrutura de dados
a estrutura de dados e algo que define as regras que os dados irão seguir
Cada estrutura de dados (ex. inteiro, lista, array) trazem regras para dizer como um dado é organizado.
O algoritmo é a sequencia de sentenças de código que vão estar sendo executadas para fazer algum tipo de trabalho.

VARIÁVEIS E CONSTANTES COM O JAVASCRIPT
ECMASCRIPT > 2015 > novidades declarações, variáveis e constantes
*/


// LET, VAR & CONST

var a = 3
// atribuição para a variável a

// identificadores (nome de var, constantes, funções, classes e objetos)
// cuidado com a nomenclatura

let b = 4
// var ou let , regra geral, vamos usar o let

// quando trabalhamos com var podemos redeclarar dentro de um mesmo escopo, não é o caso do let
/* >>teste esse código<<
var a = 3
let b = 4

var a = 30
let b = 40
> o código acima causa um erro, pois não podemos redeclarar b, por ter sido declarado com let
Para termos sucesso com o código, temos que fazer apenas a atribuição, como demonstra no código abaixo.

var a = 3
let b = 4

var a = 30
b = 40

*/



var a = 2
var a = 3
var a = 5
console.log(a)

const c = 5
// só aceita um único valor
// quanto mais constantes no algorítimo, melhor será para mantê-lo

