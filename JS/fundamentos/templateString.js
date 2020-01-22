const nome = "Rebeca"

const concatenacao = 'Olá ' + nome + '!'

console.log(concatenacao)

// No template string podemos quebrar linhas no meio.

const template = `
    Olá 
    ${nome}!`

console.log(template)

// expressões ...
console.log(` 1 + 1 = ${1+1}`)
// o que está entre chaves ele vai tentar interpolar

//dentro do conceito do template string podemos chamar uma função 
const up = texto => texto.toUpperCase()//function arrow
console.log(`Ei.. ${up('cuidado')}!`)
//chamando a função dentro do template string


