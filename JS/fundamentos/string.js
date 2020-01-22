// string é uma cadeia de caracteres
// No JS podemos delimitar uma string com três tipos 
// ''
// ""
//  ``
const escola = 'Cod3r'

console.log(escola.charAt(4))//lhe entrega o quarto caractere que tem na string
console.log(escola.charAt(6))//no JS ele retornará um valor vazio

console.log(escola.charCodeAt(3))//esse método devolve o valor que o caractere tem na tabela ask ou tabela unicode

console.log(escola.indexOf('3'))//este método retorna o índice associado ao digito 3 da palavra escola

console.log(escola.substring(1))// esse método imprime do índice um para frente > od3r
console.log(escola.substring(0,3))//aqui ordenamos que que ele vá do indice 0 até o 3 sem incluir o 3 > Cod 

console.log('Escola '.concat(escola).concat("!"))//esse método concatena 
console.log('Escola '+escola+"!")//concatena 

console.log(escola.replace(3,"e")) //esse método faz a troca de caracteres

console.log(escola.replace(/\d/, 'e'))
//  /\d/ > expressão regular, diz, substituia todos os dígitos dentro do texto pela letra 'e' 
console.log(escola.replace(/\w/g, 'e'))
//substitua todas as letras e dígitos pela letra e  > eeee

console.log('Ana, Maria,Pedro'.split(','))
//convertendo uma estrutura em array, basta chamar a função split e indicar o separador
console.log('Ana, Maria,Pedro'.split(/,/))
// usando a função com regex


