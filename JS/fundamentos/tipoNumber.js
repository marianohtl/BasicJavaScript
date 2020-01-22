const peso1 = 1.0
//number _mesmo sendo ponto flutuante_
const peso2 = 1.1
const peso3 = Number('2.0')
const peso4 = Number('2.1')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) //true
console.log(Number.isInteger(peso2)) //false
console.log(Number.isInteger(peso3)) //true
console.log(Number.isInteger(peso4)) //false

const avaliacao1 = 9.434
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)
console.log(media.toFixed(2))
//com a função toFixed formatamos a quantidade de casas decimais

console.log(media.toString())


console.log(media.toString(2))
//convertendo no valor binário

console.log(typeof media) // number > valor tanto inteiro quanto com ponto flutuante
console.log(typeof Number) // function

//operações estranhas com números
console.log(7/0.001)//7000
console.log(7/0)//infinity
console.log("10" / 2)
//5
console.log('3'+3)//concatena 
console.log("show"/2)
//NaN
console.log(0.1+0.7)
//gera resultados não precisos,  por conta das expecificações 
//console.log(10.toString()) erro
console.log((10.2323).toFixed(3))//10.232 

