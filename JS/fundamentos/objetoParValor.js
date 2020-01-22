// um objeto é uma coleção de chave e valor
// identificador : valor
// esse conceito também está presente quando declaramos uma variável
// definimos uma variável e uma constante dentro de um contexto lexico
const saudacao = 'Opa'
//contexto lexico é o contexto aonde a sua variável for definida fisicamente no código
// o local físico no código aonde aquele par nome:valor foi definido

// - Dentro de um programa existem vários contextos sendo executáveis, exemplo, entrou em uma função, uma função define um contexto _contexto local daquela função_

function exec(){
    const saudacao = 'Falaa'// contexto léxico 2
    return saudacao
}

// no exemplo acima não temos dois contextos léxicos aonde vai se procurar a função
// como temos contextos diferentes, isso não gera conflito
// no contexto acima, a função retorna saudacao do contexto léxico2 _contexto da função, mais restrito_, caso ele ache ele retorna o valor, caso não encontre, ele vai buscar em um contexto maior, caso ele não ache em nenhum dos contextos ele vai alegar que a variável ou a constante não foi definida 


//OBJETOS SÃO GRUPOS ANINHADOS DE PARES NOME/VALOR
const cliente = {
    nome:'Pedro',
    idade:32,
    peso:90,
    endereco:{
        logradouro: "rua plala",
        numero:123
    }
}
// no exemplo acima poderíamos ter chaves com o mesmo nome no endereço, pois temos contextos léxicos diferentes

console.log(saudacao) // Opa
console.log(exec()) // Fala  < pois são contextos léxicos diferentes, então retorna outro valor
console.log(cliente) // coleção de chaves e valores alinhadas

