//operador de desestruturação, ele tira da estrutura alguma coisa
// uma estrutura pode ser um objeto
// esse operador é uma forma de extrair de dentro desse objeto seus atributos
// você também tme o array como sendo uma estrutura  _forma de retirar elementos do array a partir dessa forma de extrair_
// o operador destructuring tem duas formas de escrita, quando ele trabalha no ambito de objeto você usa nas suas sintaxes as chaves, pois para criar um objeto literal você usa chaves, e quando você quer usar o operador destructing no âmbito de array, você usa na sua sintaxe o colchete, já que para definir um array se usa colchetes

const pessoa = {
    nome: 'Ana',
    idade: 5, 
    endereco:{
        logradouro:'Rua ABC',
        numero:100
    }
}
// suponha que você quer tirar a partir do objeto pessoa nome e idade, queremos ter acesso a esses dois dentro do nosso programa
//forma padrão
console.log(pessoa.nome)
console.log(pessoa.idade)
//usando o operador destructuring, temos uma forma simplificada de tirar de dentro de uma estrutura dois atributos
//const {} 
// essas chaves não são para criar um objeto e sim para representar o operador de desestruturação
const {nome,idade} = pessoa  // tire de dentro do objeto pessoa o atributo nome e idade
// a partir dessa linha temos duas variáveis para trabalhar

console.log(nome,idade)
// uma maneira de usar o destructing não utilizando os nomes dos atributos como parâmetro
const { nome: n, idade: i} = pessoa
console.log(n,i)// teremos outras variáveis

// se tirarmos um atributo que não existe dentro do objeto
const{ sobrenome, bemHumorado = true} = pessoa

console.log(sobrenome,bemHumorado)

//por padrão ele atribui a bemHumorado e a sobrenome, como são atributos inexistentes dentro do objeto pessoa, recebemos então a estes é atribuido o valor undefined
// acima atribuimos true em bemHumorado caso não houvesse atribuição de valor do objeto pessoa

