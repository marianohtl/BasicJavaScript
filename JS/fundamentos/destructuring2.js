//a sintaxe usa o mesmo token []  - destructuring and array

const [a] = [10] //a recebe o primeiro elemento array 10

//essa é uma forma de pegar multiplos elementos a partir de um array e extrair _tirar de dentro da estrutura_desestrutura_  ,atribui a várias variáveis usando uma única atribuição
const [n1, , n3, , n5,n6 = 0 ] = [10,7,9,8]
console.log(n1,n3,n5,n6)

//desestruturação aninhada
//  um array pode ter outros elementos do tipo array 
const [ ,[ ,nota]] = [[ ,8,8],[9,6,8]]
console.log(nota)//6

