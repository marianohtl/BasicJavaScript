AUla 05

Temo sete diferentes tipos de dados.

todos são primitivos tirando os objetos

tipos primitivos são imutáveis.

var nome 
A variável nome não pode ser alterada, podemos atribuir valores diferentes, porém nome sempre será nome. Diferente de objetos que podemos adicionar métodos e propriedades.

var nome = 'talita'; // string
var idade = 23; //number
var possuiIdentidade = true; //Bolean
var time; // undefined
var comida = null; // null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

String são frases, declaradas com aspas.

Number não usa aspas.

Símbolos (novo tipo de dados S6+), tipo de dado que quando criado mesmo que ele tenha o mesmo nome de outro simbolo ele se torna único na memória.


var nome = 'neném';
var idade = 23;
var time = null;
var simbolo = Symbol();

console.log(typeof nome);
//string
console.log(typeof idade);
//number
console.log(typeof time);
//objetct 'bug' , o null era objeto antigamente, e está mantido assim
console.log(typeof simbolo);
//Symbol

//CONCATENANDO STRINGS
console.log(idade + nome);
//23neném

var nomeCompleto = idade + nome;
console.log(nomeCompleto);
//23neném
console.log(typeof nomeCompleto);
//string >> torna números em strings





VERIFICANDO O TIPO DE DADO

typeof 'sua variável'
 



Strings:

podemos somar strings (CONCATENAR)

Sempre que somamos números à strings, no final temos uma string.

var nome = 'biba';
var sobrenome = 'babu';
var nomeCompleto = nome + ' ' + sobrenome;

No caso de números temos a soma.

var ano1 = 2018;
var mes = 6;
console.log(ano1 + mes);
//2024


ASPAS DUPLAS, SIMPLES E TEMPLATE STRING 

'JavaScript é super fácil';
//JavaScript é super fácil


"JavaScript é 'super' fácil";
//JavaScript é 'super' fácil


'JavaScript é "super" fácil'; 
// JavaScript é "super" fácil



BACKET sLASH
interrompe a função que está sendo executada 

"JavaScript é \*super\* fácil";
//JavaScript é "super" fácil
- ELE NÃO FECHOU A STRING <<


INVÁLIDO

"JavaScript é "super" fácil"; 


Não necessariamente precisamos atribuir valores a uma variável.


TEMPLATE STRING

var gols = 1000;
var farse1 = 'Romário fez ' + gols + ' gols';/

var frase2 = `Romário fez ${gols} gols`; //Utilizando Template Strings

- VOCÊ DEVE PASSAR EXPRESSÕES / VARIÁVEIS DENTRO DENTRO DE ${}
