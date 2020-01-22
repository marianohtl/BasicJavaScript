const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        case 10:
            console.log('Quadro de honra!')
            break
        case 8: case 7:
            console.log('Aprovado!')
            break
        case 9: case 6: case 5:
            console.log('Recuperação!')
            break
        case 4: case 3: case 2:
                console.log('Reprovado!')
                break
        case 1: case 0:
            console.log('Nota inválida.')
            break
    }
}

imprimirResultado(10)
imprimirResultado(8)
imprimirResultado(4)
imprimirResultado(9)
imprimirResultado(3)
imprimirResultado(0)


// sem o break temos o resultado de nota inválida



