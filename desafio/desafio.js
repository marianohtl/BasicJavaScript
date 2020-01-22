var nome = "Thalita"
var sobrenome = "Mariano"

document.getElementById('btn').onclick = mostraTexto;
function mostraTexto(){
    document.getElementById('codigo-js').innerHTML = nome +' '+ sobrenome;
}