let dobro = function (a){
    return 2 + a
}

dobro = a => 2 * a //return implícito

console.log(dobro(Math.PI))

let ola = function(){
    return 'Olá'
}

Ola = () => 'Olá'//sem param
Ola = _ => 'Olá'//possui param

console.log(ola())
