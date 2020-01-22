const funcs = []


for (let i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()
// essa função, por ter let e essa variável tem escopo de bloco, existe o armazenamento do valor no índice 2 e no índice 8

