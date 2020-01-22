// Operadores Relacionais
// são operadores binários

// por javascript ser uma linguagem fracamente tipada existe uma forma diferente de fazer comparação
//Quando fazemos uma comparação usando um operador relacional, seu resultado sempre será true or falso
// precisamos sempre saber se queremos comparar se o valor é igual e o tipo é igual
console.log('01)','1'==1)//true
console.log('02)', '1'===1 )//false,  1 não é extritamente igual a um
console.log('03)','3' != 3) //false
console.log('04)','3' !==3) //true
console.log('05)',3<2)//false
console.log('06)',3>2)//true
console.log('07)',3 <= 2) //true
console.log('08)',3 >= 2) //false

const d1 = new Date(0)
const d2 = new Date(0) //01/01/1970
//estamos comparando com variável de referência de memória, não vai fazer diferença de usar o == ou o ===
console.log('09)',d1==d2)//false
console.log('10)',d1==d2)//false

console.log('11)',d1.getTime()=== d2.getTime()) //nesse caso dará true pois estamos trabalhando com number que são estritamente iguais
console.log('12)',undefined==null)//true
console.log('12)',undefined===null)//false








