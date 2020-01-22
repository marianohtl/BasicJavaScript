function on(){
  document.getElementById('lamp').src = "img/on.jpg";
}

function off(){
  document.getElementById('lamp').src = "img/off.jpg";
}

function blink(){
  var contador = 0;
  var frequencia = 0;
  while(contador < 10){
    setTimeout("document.getElementById('lamp').src='img/on.jpg';", frequencia);
    frequencia += 200;
    setTimeout("document.getElementById('lamp').src='img/off.jpg';",frequencia);
    frequencia += 200;
    contador++ 
}
  };

// var indice = 1

// function click(){
//   if (indice == 1){
//     // blink();
//     indice++;
//     console.log(indice);
//   }else {
//     // blink()
//     console.log(indice);
//   };
// };

// function blink(){
//   var contador = true;
//   var frequencia = 0;
//   if (indice == 1){
//   while(contador == true){
//     setTimeout("document.getElementById('lamp').src='img/on.jpg';", frequencia);
//     frequencia += 200;
//     setTimeout("document.getElementById('lamp').src='img/off.jpg';",frequencia);
//     frequencia += 200;};
//    }else{
//     document.getElementById('lamp').src='img/off.jpg';
//     contador = false;
//     indice = 1;

//   }

//   }
  
