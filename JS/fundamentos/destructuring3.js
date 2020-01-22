function rand({min = 0 , max = 1000}){ //aqui estamos usando o operador destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//abaixo estamos usando um objeto

console.log(rand({max:50 , min:40}))

// o código acima fica gerando valores randômicos entre 50/40
// outra possibilidade é passarmos apenas o valor de mínimo ou de máximo
console.log(rand({min:455}))
// o código acima vai executar entre o mínimo definido e o máximo que está padrão na parte de cima

//podemos passar também um objeto vazio
console.log(rand({})) // vai navegar entre 0 e 1000

//console.log(rand())  aqui teríamos um problema pois ele terntará desestruturar algo que está undefined ou null

