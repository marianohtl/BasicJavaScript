// array é um vetor, uma estrutura unidirecional a qual conseguimos agrupar múltiplos valores de uma forma linear (ele não possui muitas dimensões), ele é como um vetor
// logo temos um array, que é uma forma de agruparmos mútiplos valores em uma única estrutura, a partir de um único identificador, e essa estrutura é uma estrutura INDEXADA, podemos acessar essa estrutura dentro de um array a partir de um número, logo temos o primeiro elemento a partir do índice 0, o segungo elemento, a partir do índice ...
// o array no js, é heterogênio, e o array não tem tamanho fixo

const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])

console.log(valores[500])//retorna undefined

console.log(valores.length)//a variável length diz quantos elementos tem no array


//adicionando valores em um array 
valores.push({id:3}, false,null,'teste')
console.log(valores)

//valores
console.log(valores.pop()) // ele rertorna o último valor do array e exclui ele do mesmo

delete valores[0]  // exclui o elemento do índice 0 do array

console.log(valores)

console.log(typeof valores) // em javascript um array é do tipo objetc

