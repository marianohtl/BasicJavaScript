function jogar(){
if(document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false){
alert('Faça sua jogada.');
}else{
  var randon = Math.floor(Math.random() * 3);
  switch(randon){
    case 0:
    document.getElementById('pc').src="img/pcpedra.png";
    break;
    case 1:
    document.getElementById('pc').src="img/pcpapel.png";
    break;
    case 2:
    document.getElementById('pc').src="img/pctesoura.png";
    break;
  }

  if((document.getElementById('pedra').checked == true && randon == 0) || (document.getElementById('papel').checked == true && randon == 1) || (document.getElementById('tesoura').checked == true && randon == 2)) {
    document.getElementById("placar").innerHTML='Deu empate! >:l';
  } else if ((document.getElementById('pedra').checked == true && randon == 2) || (document.getElementById('papel').checked == true && randon == 0) || (document.getElementById('tesoura').checked == true && randon == 1))
  {
    document.getElementById("placar").innerHTML='Droga! Você venceu! :/';
  }else{
    document.getElementById("placar").innerHTML='Eu venci :)';
  }
}
}

function resetar(){
  document.getElementById("placar").innerHTML=' ';
  document.getElementById('pc').src="img/pc.png";
}