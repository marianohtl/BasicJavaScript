// linguagens C like
// linguagens que beberam das fontes de do C
// definimos os blocos com chaves, todas as linguagens pegam os tokens / símbolos e definem por chaves
// a questão do runtime - operações assíncronas e padrões de pojetos onde as linguagens implementam
// 
// PADRÃO OFSERVER
//  
// NO BROWNSER
//
// Temos o objeto global, que representa o escopo global.
// window - quando criamos variáveis globais em um escopo global eles podem acabar batendo algumas vezes


// no window , this é estritamente igual a window
// o this pode variar dependendo de quem chamou a função
// 

var a = 'texto' // contexto global

window.a // temos acesso à variável texto
var a = 123 //sobrescrevemos o conteúdo da variável a que estava no objeto global
window.a //123

this.a // 123

window.b // undefined
// é uma variável global mas está fora do contexto global
// uma variável declarada no contexto global, ainda será global mas não irá para o objeto window.b
// se tentarmos declarar novamente com o let (duas variáveis com escopo global, ele gerará um problema)
// this.b
// b > 123
// c >> 456
// window.c
// >> undefined

// uma variável 




let a = 3
this.c = 456
this.d = false
this.e = 'teste'


global.b = 123
console.log(this.a)
console.log('Global a:'+global.a)
console.log('Global b:'+global.b)
console.log('Global c:'+global.c)

console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)
// equivalente
module.exports = {e:456,f:false,g:'teste'}


