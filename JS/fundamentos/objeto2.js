//
console.log(typeof Object) //function
console.log(typeof new Object())

const Cliente = function() {}
console.log(typeof Cliente) // function
console.log(typeof new Cliente) // object _instanciando uma função_

class Produto {}  //ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto())
// ou > console.log(typeof new Produto)

// a forma de criar objetos em javascript é a partir de funções
// podemos criar um objeto literal, porém também podemos criá-lo a partir de funções instanciando uma função para termos um objeto
// a classe criada em javascript internamente é uma função
// quando criamos um objeto de forma literal, já estamos instanciando o objeto _já temos o objeto com os seus dados e atributos_ LOGO QUANDO CRIAMOS A PARTIR DA NOTAÇÃO LITERAL JÁ TEMOS UMA INSTÂNCIA
// é diferente de quando definimos uma função, que é como se fosse nossa classe _molde_ e a partir  daquela função /estrutura, nós instanciamos quantos objetos quisermos
// a partir da palavra new, instanciamos funções, podemos criar intâncias de funções que nós definimos , como podemos criar instâncias a partir de uma classe 
// funções podem ter atributos e comportamentos
// funções podem ser instanciadas




