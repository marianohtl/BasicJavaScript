// função é como uma receita de bolo
// função é um verbo, uma ação
// ela executa um processo baseado em uma sentença de código
// ela define um bloco, este delimitado por chaves
// temos também um corpo, no qual tem todas as sentenças de códigos que serão executadas quando invocamos aquela função
// trecho de código que pode ser chamado dentro do nosso programa
// uma função como um receita de bolo, ela recebe uns ingredientes de entrada que são os dados, dentro dessa função fazemos todo o passo a passo (a receita) e no final retornamos um resultado
// função é um bloco de código nomeado, ou seja ele agrupa várias sentenças de código, ou uma sentença ou as vezes nenhuma sentença, e podemos chamá-lo quantas vezes desejamos
// - podemos criar uma função vazia
// - damos um nome a função _existe funções sem nome_
// a função recebe parâmetros de entrada > ingredientes e retorna um valor
// uma função pode receber nenhum parâmetro, pode não retornar dados, pode receber dados de entrada, como pode receber e retornar


// function nomeFunction(parâmetro){ bloco de código }
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2,3,1,2,3,5)  // caso passe mais parâmetros, a linguagem simplesmente ignora
imprimirSoma()// retorna NaN


function soma(a,b = 0){
    return a + b
}

console.log(soma(5))
