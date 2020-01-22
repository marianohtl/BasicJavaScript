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


var name = 'biba';
var nickname = 'babu';
var nomeCompletoo = name + ' ' + nickname;
console.log(nomeCompletoo);
console.log(typeof nomeCompletoo);

//somando números

var ano1 = 2018;
var mes = 6;
console.log(ano1 + mes);
var ano1 = 2018;
var mes = 6;
console.log(typeof ano1);
console.log(typeof mes);
//2024 
//number
//number

var ano1 = '2018';
var mes = 6;

console.log(ano1 + mes);
var ano1 = 2018;
//20186

var melhor = 'teste';
var frase1 = 'Esse é o \"melhor\" jogo';
console.log(frase1);

var gols = 1000;
var frase2 = 'Romário fez ' + gols + ' gols';
var frase3 = `Romário fez ${gols + 2} gols`; 
console.log(frase2);
console.log(frase3);