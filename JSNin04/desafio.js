/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
isTruthy = function (x){
return !!x === true ? true : false;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(0));
console.log(isTruthy(-0));
console.log(isTruthy(false));
console.log(isTruthy(null));
console.log(isTruthy(undefined));
console.log(isTruthy(NaN));
console.log(isTruthy(''));
console.log(isTruthy(""));




/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(2));
console.log(isTruthy('B'));
console.log(isTruthy(function(){}));
console.log(isTruthy([1,2,3]));
console.log(isTruthy({a:1,b:2}));
console.log(isTruthy(' '));
console.log(isTruthy('Beterraba'));
console.log(isTruthy(true));
console.log(isTruthy(2.0));
console.log(isTruthy(8*10));
console.log(isTruthy(-1));


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
  marca: 'Fusca',
  modelo: 'GTX800',
  placa:'FW1495',
  ano:1995,
  cor:'rosa',
  quantasPortas:4,
  assentos:5,
  quantidadePessoas:0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor){
  carro.cor = cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
  return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
  return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
  return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
  return 'Esse carro é um '+carro.marca+ ' '+ carro.modelo;
};

console.log(carro.obterMarcaModelo());
/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
//meu exercício
// carro.adicao = function(numPessoas){
//   var y = 5 - carro.quantidadePessoas;
//   var z = numPessoas - carro.quantidadePessoas; 
//   if (carro.quantidadePessoas < 5 && numPessoas > y){
//       if(y === 1){
//       carro.quantidadePessoas = y + carro.quantidadePessoas;
//       return "Só cabe mais "+ y + " pessoa!" + " Ficaram para fora " + z + " pessoas."
//       }else{
//       carro.quantidadePessoas = y + carro.quantidadePessoas;
//       return "Só cabem mais "+ y + " pessoas!" + " Ficaram para fora " + z + " pessoas."
//       carro.quantidadePessoas = y + carro.quantidadePessoas;         
//     };
//     }else{
//       carro.quantidadePessoas = numPessoas + carro.quantidadePessoas;    
//       if(carro.quantidadePessoas >= 5){
//         return "O carro já está lotado!" + " Já temos "+ carro.quantidadePessoas +" pessoas no carro!";;
//       }else{
//       return "Já temos "+ carro.quantidadePessoas +" pessoas no carro!";  
//     };
// }; 
// };

//correção

carro.adicionarPessoas = function(numeroPessoas) {
  var totalPessoas = carro.quantidadePessoas + numeroPessoas;
  var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
  var pluralOuSingular = quantasPessoasCabem === 1 ? ' pessoa': ' pessoas';
  if(carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos) {
    return 'O carro já está lotado!';
  }
  if(totalPessoas > carro.assentos){
      return 'Só cabem mais ' + quantasPessoasCabem + pluralOuSingular + '!';
    }
    carro.quantidadePessoas += numeroPessoas;
    return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
  };


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.obterCor());//rosa

// Mude a cor do carro para vermelho.
carro.cor = 'vermelho'

// E agora, qual a cor do carro?
console.log(carro.obterCor());//vermelho


// Mude a cor do carro para verde musgo.
carro.cor = 'verde musgo'


// E agora, qual a cor do carro?
console.log(carro.obterCor());//verde musgo


// Qual a marca e modelo do carro?
console.log(carro.obterMarca());// Fusca

// Adicione 2 pessoas no carro.
console.log(carro.adicionarPessoas(2));

// Adicione mais 4 pessoas no carro.
console.log(carro.adicionarPessoas(4));


// Faça o carro encher.
console.log(carro.adicionarPessoas(3));


// Tire 4 pessoas do carro.
console.log(carro.adicionarPessoas(-4));


// Adicione 10 pessoas no carro.
console.log(carro.adicionarPessoas(10));


// Quantas pessoas temos no carro?
console.log(carro.quantidadePessoas);
