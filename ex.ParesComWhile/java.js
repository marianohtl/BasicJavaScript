// JavaScript source code

let meninos = ["Alfedro", "Pedro", "Anast�cio", "Waldisney"];
let meninas = ["Alexandrina", "Francisca", "Josefa", "Marinalva"];

let i = 0;
  

while (i < meninos.length) {
    let j = 0;
    while (j < meninas.length) {
        console.log(meninos[i], meninas[j]);
        j++
    }
    i++
};