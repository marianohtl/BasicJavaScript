var intervalo = 2000;

function slide1(){
  document.getElementById("banner").src="img/cat4.jpg";
  setTimeout("slide2()", intervalo);
}//setTimeout está chamando uma nova função

function slide2(){
  document.getElementById("banner").src="img/cat2.jpg";
  setTimeout("slide3()", intervalo);
}


function slide3(){
  document.getElementById("banner").src="img/cat3.jpg";
  setTimeout("slide1()", intervalo);
}

