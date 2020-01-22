/*Os operadores aritméticos podem ser classificados como operadores de atribuição, opeadores relacionais,  operadores lógicos, e também podem ser classificados pela quantidade de operandos
os operadores aritméticos são operadores binários, ou seja operam em cima de dois operandos
*/

const [a,b,c,d] = [3,5,1,15] //forma reduzida de criar quatro variáveis

const soma = a + b + c + d
// a sintaxe acima é conhecida como infix
// postfix > depois do operando ++d
// prefix > antes do operando d++
//temos então aí operadores binários, operadores que operam em cima de dois operandos

// -a , isso é um operador unario, um operador que opera em cima de um único operando

const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a 
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, divisao)

