/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'CAMPEONATO CARIOCA';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/

//correção
//var teams = ['America-RJ','Americano','Goytacaz','Macaé','Nova Iguaçu'];


var teams = [' ' ,'America-RJ','Americano','Goytacaz','Macaé','Nova Iguaçu'];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."

CORREÇÃO
function showTeamPosition(number){
    if(number <1 || number >5){ 
    return "Não temos a informação do time que está nessa posição."
    }
    return 'O time que está em ' + number + 'º lugar é o ' + teams[number] +'.';
    
}


    */
function showTeamPosition(number){
        if(number > 0 && number <=5){
        return 'O time que está em ' + number + 'º lugar é o ' + teams[number-1] +'.';
    }
    return "Não temos a informação do time que está nessa posição."
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
console.log(showTeamPosition(1));
console.log(showTeamPosition(2));
console.log(showTeamPosition(3));
console.log(showTeamPosition(4));
teams[7] = 'Palmeiras';
console.log(teams[7]);
console.log(teams);



/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

var counter = 20;
while(counter <= 30){
console.log(counter);
++counter;
};

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cor){
switch(cor){
    case 'red':
    console.log('O hexadecimal para a cor '+ cor +' é #FF0000.');
    ;
    break;
    case 'blue':
    console.log('O hexadecimal para a cor '+ cor +' é #B0E0E6.');
    break;
    case 'white':
    console.log('O hexadecimal para a cor '+ cor +' é #F0FFFF.');
    break;
    case 'green':
    console.log('O hexadecimal para a cor '+ cor +' é #008000.');
    break;
    case 'pink':
    console.log('O hexadecimal para a cor '+ cor +' é #FF1493.');
    break;
    default:
    console.log('Não temos o equivalente hexadecimal para '+ cor+'.');
    }
};

/*
CORREÇÃO OPÇÃO 1

function convertToHex(cor){
    var hexa

    switch(cor){
        case 'red':
        hexa = '#FF0000'
        break;
        case 'blue':
        hexa = '#0000FF'
        break;
        case 'white':
        hexa = '#FFFFFF'
        break;
        case 'green':
        hexa = '#00FF00'
        break;
        case 'black':
        hexa = '#000000'
        break;
        default:
        return console.log('Não temos o equivalente hexadecimal para '+ cor+'.');
        }
        console.log('O hexadecimal para a cor '+ cor +' é '+ hexa + '.');
    };
*/

//CORREÇÃO OPÇÃO 2
// function convertToHex(cor){
//    
//    switch(cor){
//         case 'red':
//         return console.log('O hexadecimal para a cor '+ cor +' é #FF0000.');
//         ;
//         case 'blue':
//        return console.log('O hexadecimal para a cor '+ cor +' é #B0E0E6.');
//         case 'white':
//        return console.log('O hexadecimal para a cor '+ cor +' é #F0FFFF.');
//         case 'green':
//        return console.log('O hexadecimal para a cor '+ cor +' é #008000.');
//         
//         case 'pink':
//        return console.log('O hexadecimal para a cor '+ cor +' é #FF1493.');
//        
//         default:
//        return console.log('Não temos o equivalente hexadecimal para '+ cor+'.');
//         }
//     };
    
/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('red'));
console.log(convertToHex('blue'));
console.log(convertToHex('white'));
console.log(convertToHex('gray'));
console.log(convertToHex('pink'));
console.log(convertToHex('green'));
console.log(convertToHex('magenta'));
console.log(convertToHex('purple'));
