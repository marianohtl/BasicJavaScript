function rand([min = 0, max = 1000]){
    //se o mínimo for > que o máximo inverta as duas variáveis,uma forma de inverter essas duas variáveis é usando o operador destructuring
    if(min > max) [min,max] =[max,min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([,10]))
console.log(rand([]))
//console.log(rand()) este exemplo nos causaria problemas

