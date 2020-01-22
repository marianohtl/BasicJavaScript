/*
    Como a linguagem JS lida com os tipos de dados
    numericos, textos, conjuntos, listas
    Quando lidamos com variáveis e constantes algumas linguagens precisam que o tipo do valor seja declarado permanentemente.
    Porém JavaScript não é assim > linguagem de tipagem dinâmica = fracamente tipada
    Por um lado a linguagem se torna mais flexível, por outro pode gerar tipos de erros.
*/

//temos um texto livre
let qualquer = 'legal'
console.log(qualquer)
console.log(typeof qualquer)
// qualquer se tornou string
// a tipagem é dinâmica porém os valores tem tipos


let qualquer2 = 3.444
console.log(qualquer2)
console.log(typeof qualquer2)
// qualquer2 se tornou valor number


//variáveis que nome não fazem sentido
let valor = ''
let numero = ''
let pqp = '' //siguas