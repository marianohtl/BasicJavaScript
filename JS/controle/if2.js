function teste1(num){
    if(num > 7)
        console.log(num)
        console.log('Final')
}

teste1(1)
teste1(8)

// a sentença de código que vai ser executada com relação ao if será somente a primeira, pois a senteça correspondente ao if só considera a primeira linha de código

function teste2(num){
    if(num > 7);{
        console.log(num)
    }
}

teste2(6)
teste2(8)

//Acima temos uma senteça de código vazia associada ao if, que termina com o ;
//    if(num > 7);
//    {console.log(num)}

