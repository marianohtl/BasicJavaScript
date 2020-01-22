let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)//true
comparaComThis(obj)//false

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)//false
comparaComThisArrow(module.exports)//true

//aerow function é mais forte que o bind
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)//false

comparaComThisArrow(module.exports)//true
