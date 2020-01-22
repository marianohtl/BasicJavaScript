// exercícios com var e let 
// princípio também são aplicados a constantes
// let pode-se alterar valor
// const pode-se alterar valor

{
    {
        {
            {
                var sera = 'Será?'
            }
        }
    }
}

console.log(sera)

// escopo é o local aonde a variável seria visível 
{
    {
        {
            {
                var sera = 'Será?'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

// a variável var dentro de um bloco de código ficará visível fora do bloco

function teste(){
    var local = 222
    console.log(local)
}
console.log(teste())

//console.log(local)  ERROR POR SER UMA VARIÁVEL LOCAL
// quando definimos variáveis dentro de uma função, o escopo da variável é dentro da função e não estará visivel fora
var a = 123 
var a = 'teste'

// window objeto global que existe nos brownsers, tudo que estiver dentro da aba e for declarado fora de função estará dentro de window _objeto global_
// console.log(window.a)
// Quando criamos uma variável fora de uma função ela é uma variável global, ou seja ela estará disponível dentro do objeto window
// o grande problema de criarmos variáveis globais dentro de window,
// variáveis com o escopo global possuem a vantagem de acessarmos em qualquer lugar do nosso sistema, porém qualquer sob-escrita dessa variável pode gerar um problema muito sério
// - variáveis var só possuem dois escopos possíveis, ou ele é nível global, se tratando da sua aplicação inteira, no caso declarada no objeto ou fora, temos a variável global
// - ou criamos uma variável var no escopo de função



