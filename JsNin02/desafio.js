//Desafio da semana #2
//Nesse exercício, você está livre para escolher os nomes para suas variáveis e funções! :smile:


// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function soma(x,y){
    return x + y;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var o 
o = soma(1,1) + 5

// Qual o valor atualizado dessa variável?
console.log(o);

// Declare uma nova variável, sem valor.
var semValor;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function adicao(){
    semValor = 8;
    return 'O valor da variável agora é '+ semValor;
}

// Invoque a função criada acima.
console.log(adicao());

// Qual o retorno da função? (Use comentários de bloco).
/*
* O valor da variável agora é 8

/*
undefined é quando ele tenta avaliar a function ou alguma outra coisa,
por não ter retorno, o console retorna undefined

Como saber se existe valor ou foi ou não passado?

Temos o null e o undenined.
null precisa ser explicitamente passado (sem valor)
undefined - qualquer variável declarada ou qualquer ARGUMENTO DE função
que não foi passado será undefined (não foi passado nenhum valor)




Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function nova(a,b,c){
    if (a && b && c ){
        return a * b * c + 2
    }else{
        return 'Preencha todos os valores corretamente!'

    }
}
/* CORREÇÃO
* function nova(a,b,c){
*  if( a === undefined || b === undefined || c === undefined ){
* return "Preencha todos os valores  corretamente!"
* }else{
*    return a*b*c+2
* }
*/


// Invoque a função criada acima, passando só dois números como argumento.
console.log(nova(10,2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(nova(2,2,2));

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// 10

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
//fail
function new2(q,w,e){
    if(q && w && e) {
        h = (q+w) / e
        return h;
     }else if (q && w) {
       t = w + q
        return t;
     } else if(q) {
            return q;
    } else if(!q,!w,!e) {
        return false
    }else{
        return null
        }
    }

/*
Correção

function new2(x,y,z){
    if(x !== undefined && y === undefined && z === undefined)
    return x;
} else if ( x !== undefined && y !== undefined && z === undefined) {
    return x + y;
} else if  x !== undefined && y !== undefined && z !== undefined){
    return (x + y)/z;
} else if x === undefined && y === undefined && z === undefined){
    return false;
}else{
    return null;
}
}
*/



// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(new2(2));
console.log(new2(5,8));
console.log(new2(3,3,2));
console.log(new2());