const funcs = []


for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
//como a variável não tem escopo de bloco, quando executamos esse bloco o resultado sempre será 10, para qualquer chamada que ele der



//funcs.push() adicionando um novo elemento no array
// adicionando uma função anônima
// para cada interação ele vai adicionar uma nova função, que no contexto dito, será i

