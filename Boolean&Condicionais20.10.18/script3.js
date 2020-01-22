//Verifique se sua idade é maior do que a de algum parente

// Dependendo do resultado coloque no console 'É MAIOR', 'É IGUAL' ou 'É MENOR'

var minhaIdade = 1;
var idadePrimo = 1;

if(minhaIdade > idadePrimo){
  console.log('É MAIOR.');
} else if (minhaIdade === idadePrimo){
  console.log('É IGUAL.');
}else{
  console.log('É MENOR.');
}

//Qual valor é retornado na seguinte expressão? 
var expressão = (5-2) && (5 - ' ') && (5 - 2);
console.log(5 + ' ');
//3

//VeriFicar se as seguinte variáveis são Truthy ou Falsy

var nome = 'Andre'; //true
var idaDe = 20; //true
var possuiDoutorado = false; //false
var empregoFuturo; //false
var dinheiroNaConta = 0; // false



console.log(!!nome, !!idaDe, !!possuiDoutorado, !!empregoFuturo,!!dinheiroNaConta);


// // Compare o total de habitantes do Brasil com China (valor em milhões)

var brasil = 207;
var china = 1340;

if (brasil > china){
  console.log('Brasil tem mais habitantes.');
}else{
  console.log('Brasil tem menos habitantes.');
}

// //O que vai aparecer no console? >>>falso
 if(('Gato' === 'gato') && (5 > 2)){
 console.log('Verdadeiro.');
 }else{
 console.log('Falso.');
};

//O que vai aparecer no console? >>> CÃO
if(('Gato' === 'gato') || (5 > 2)){
  console.log('Gato' && 'Cão');
  }else{
  console.log('Falso.');
  };