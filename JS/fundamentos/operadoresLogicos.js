/*
operações do tipo && e do tipo ||
ambas possuem tabelas verdades

operador binário
&&
V e V => V
V e F => F
F e V => F
F e F => F


operador binário
||
V ou ? => V
F ou V => V
F ou F => F

operador unário
!v => f
!f => v

*/

function compras(trabalho1,trabalho2){
    // para operações lógicas com ou usamos o pipe duas vezes ||, para operações usando um único pipe |, chama-se operações bit wise,bit a bit
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) bitwise xor  (ou exclusivo)
    const comprarTv32 = trabalho1 != trabalho2   //!= também simula o ou exclusivo
    const manterSaudavel = !comprarSorvete//operador unário

    return {comprarSorvete,comprarTv50,comprarTv32,manterSaudavel}//ele faz o objeto de forma reduzida
}

console.log(compras(false,true))




