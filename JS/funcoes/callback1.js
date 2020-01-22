const fabricantes = ['Mercedes','Audi','BMW']

function imprimir(nome,indice){
    console.log(`${indice + 1}.${nome}`)
}

fabricantes.forEach(imprimir)

//fabricantes.forEach(function(a){
//    console.log(a)
//})

//fabricantes.forEach(function(fabricante){
//    console.log(fabricante)
//})


fabricantes.forEach(fabricante => console.log(fabricante))
