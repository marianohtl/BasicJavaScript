Números e Operadores

- var idade = 28;
- var gols = 1000;
- var pi = 3.14; //ponto decimal
- var exp = 2e10; //200000000 

O e é exponencial na base de 10, simplesmente a quantidade que vier após o e é a quantidade de 0 que teremos depois do número.



- Operadores Aritméticos


- var soma = 100 + 100; // 200
- var subtracao = 100 - 50;
- var multiplicacao = 100 * 2; // 200 
- var divisao = 100 / 2; //50
- var expoente = 2 ** 4; //16 
- var modulo = 14 % 5; //4

Lembrando que soma + em Strings servem para concatenar.


Operadores Aritméticos em Strings

- var soma1 = '100' + 50; //10050

- var subtracao1 = '100' - 50; //50

- var multiplicacao2 = '100'*'2'; //200

- var divisao = 'Comprei 10' / 2; //Nan

É possível verificar se uma variável é Nan ou não com a função 
isNaN()

A ordem importa,
começa por multiplicação e divisão, depois por soma e subtração - PARENTESES TEM PRIORIDADE NA EXPRESSÃO



Operadores Aritméticos Unários#
- var incremento = 5;
- console.log(incremento++);//5
- console.log(incremento);//6


- var incremento2 = 5;
- console.log(++incremento);//6
- console.log(incremento);//6

Operadores de Decremento
- var decremento = 5;
- console.log(--decremento);//4

- var decremento = 5;
- console.log(decremento--);//5
- console.log(decremento);//4


Operadores Aritméticos Unários#
O + e - tenta transsformar o valor seguinte em um número
- ' - torna o número negativo'
- var frase = 'Isso é um teste';
- ' + frase; //NaN'
- ' - frase; //NaN'

- var idade = '28';
- ' +idade; //28 (número)'
- ' -idade; //-28 (número)'
- console.log(+idade + 5); //33

- var possuiFaculdade = true;
- console.log(+possuiFaculdade); // 1


MAIS SOBRE:
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators

