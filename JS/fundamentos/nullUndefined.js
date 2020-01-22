//; 
const a = {name:'teste'} // {name: 'teste'}

const b = a 
// nesse caso a const a possui o endereço no qual este objeto está localizado
// b contém o mesmo endereço que o a aponta

b.name = 'Opa'

//se mudarmos a partir de a ou de b, teremos uma atribuição em ambas as constantes, ambos as constantes aponta para o mesmo endereço, então há uma igualação
console.log(a)
console.log(b)


//nesse caso como estamos trabalhando com um valor primitivo da linguagem, não temos apenas os endereços nas variáveis e sim uma cópia por valor
let c = 3
let d = c 
d++
console.log(c)
console.log(d)

// c > 3
// d > 4


// Quando trabalhamos com objetos e javascript a passagem é feita por referência.
// Quando trabalhamos com variáveis com valores primitivos trabalhamos com valores.

let valor2 // não inicializada
console.log(valor2)
// undefined =! a it's not defined

valor2 = null
//indica que você não tem nenhuma variável apontando para o seu endereço de memória e não há nenhum valor nela
console.log(null)

//console.log(valor2.toString())
// não podemos acessar algo em uma variável tipo null

const produto = {}
console.log(produto.preco) //isso não dá um erro, temos um retorno de undefined
console.log(produto)

produto.preco = 9.4
console.log(produto.preco) // {preco:9.4}

produto.preco = undefined // evite atribuir undefined como valores
console.log(produto.preco)
console.log(!!produto.preco)

//para termos um objeto vazio usaremos 
delete produto.preco
console.log(produto)

// temos então refência e valor
// atribuição de valor , onde cada variável vai ter o seu valor e atribuição independente
// atribuição por referência, onde cada variável aponta para o mesmo lugar


