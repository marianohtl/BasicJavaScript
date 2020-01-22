//hoisting  > içar, jogar para cima

console.log('a = ',a)
var a = 2
console.log('a = ',a)

// em algumas linguagens isso poderia causar problemas, porém em javascript a variável será içada e declarada em primeira instância

function teste(){
    console.log('a = ',b)
    var b = 2
    console.log('a = ',b)
}

teste()

//o efeito de içamento é o mesmo dentro da função
