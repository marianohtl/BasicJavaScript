//JavaScript é uma linguagem multparagma
// podemos programar Js:
// procedural
// OO
// funcional

// como criar objetos de forma literal usando a notação literal de objeto
// json > javascript object notation
// um objeto em js não é a mesma coisa em json
// json é um formato textual, que lembra muito quando criamos um objeto js
// json é um formato textual =! a um objeto criado de forma literal
const prod1 = {}
//criando dinamicamente nome dentro do objeto
prod1.nome = 'Celular Ultra Mega'

// no js um objeto é uma combinação de chave:valor
// nome do atributo e o identificado
// um objeto é uma coleção de chave/valor
// podemos ter um objeto dentro de um objeto

prod1.preco = 4.999
console.log(prod1)

//outra forma de criar um atributo
prod1['Novo Desconto'] = 0.40 //evitar atributos com espaço
console.log(prod1)

const prod2 = {
    nome:'Camisa Polo',
    preco: 89.11,
    obj:{
        obj:{
            obj:{
                nome:'ual'
            }
        }
    }
}

console.log(prod2)

//json > formato textual de objeto, coleção de classe / valor, e podemos colocar um json dentro de um objeto
//é interioperabilidade entre sistemas operacionais, comunicação entre sistemas, forma de trocar dados entre sistemas

'{"nome":"Camisa Polo", "preco":8,4}'