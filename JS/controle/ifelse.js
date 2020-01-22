const imprimirResultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado!')
    }else{
        console.log('Reprovado!')
    }
}

imprimirResultado(10)
imprimirResultado(4)
imprimirResultado('epa')//erro, porém vai comparar por ser fracamente tipada

const imprimirResultado = function(nota){
    if(nota >= 7)
        console.log('Aprovado!')
    else{
        console.log('Reprovado!')
    }
}

const imprimirResultado = function(nota){
    if(nota >= 7)
        console.log('Aprovado!')
    else
        console.log('Reprovado!')
}


