// notação ponto
console.log(typeof console) //objeto

console.log(Math.ceil(6.1))

const obj1 = {}
// mesmo que o atributo não esteja no objeto ele a cria dinâmicamente
obj1.nome = 'Morango'
// outra notação possível 
obj1['cor'] = 'vermelho'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec...')
    }
}
// acima this.nome, significa, o nome associado ao objeto que foi criado a partir dessa função
// em outras palavras, receberemos nome por parâmetro, e atribuiremos a this.nome, e este nome ficará visível para quem criar ou instânciar um objeto (ou seja ele ficará público) _podemos criar um atributo público usando o this_

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)

// a partir do this, usando o ponto podemos então criar tanto atributos como funções que serão expostas para fora dessa função quando a for instanciada
// usamos a notação ponto para acessar o atributos que foram e são visíveis dentro de um determinado objeto, seja usando a partir da notação literal, seja usando a partir de uma função, seja usando a partir de um objeto da própria api do JS


