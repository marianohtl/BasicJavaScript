/**
* Jogo de cartas (exemplo de uso de array)
*@author Beatriz Manso
*/

let nipes = ['♥','♦','♣','♠']
let faces = ['A','2','3','4','5','6','7','8','9','10','J','Q','K']

//Math.floor (converter para números inteiros)
// Math.random ()*4 (sorteio de números aleatórios 0,1,2,3)
let n = nipes [Math.floor(Math.random()*4)]
let f = faces [Math.floor(Math.random()*13)]

document.write('<h1>' + f + n + '</h1>')
