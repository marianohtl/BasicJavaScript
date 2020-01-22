// JS aceita números, true and false , entre outras coisas que geram true or false

let isAtivo = false
console.log(isAtivo) 
// no JS temos o literal false e true

//Para tornar um valor verdadeiro em falso, podemos usar o ! , que é a negação
isAtivo2 = 1

console.log(isAtivo2)//true 
console.log(!isAtivo2)//false
console.log(!!isAtivo2)//true


console.log(!true)  //false
console.log(!false) //true
console.log(!!true) //true
console.log(!!false) //false

console.log('Os verdadeiros ...')
//usando !! estamos forçando o que irá ser impresso, para que se expresse como true or false
console.log(!!3)//true
console.log(!!-1)//true
console.log(!!' ')//true string preenchida
console.log(!![])//true
console.log(!!{})//true
console.log(!!Infinity) //true
console.log(!!isAtivo2)//true

//situações false
console.log(!!0)
console.log(!!'') //string vazia
console.log(!!null) 
console.log(!!NaN) 
console.log(!!undefined) 
console.log(!!isAtivo)


console.log(!!'' || !!null || !!0 || !!' ') //true
console.log('' || null || 0 || 'oi ') //retorna o primeiro valor verdadeiro


let nome ='Lucas'
console.log(nome || 'Desconhecido') // a expressão retorna o primeiro valor verdadeiro
let nome2 = 0
console.log(nome2 || 'Desconhecido') // a expressão retorna o primeiro valor verdadeiro



