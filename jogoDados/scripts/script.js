var random = Math.floor(Math.random() * 6 + 1);

switch(random){
  case 1:
      document.getElementById('faces').src="img/1.png";
      break;
  case 2:
      document.getElementById('faces').src="img/2.png";
      break
  case 3:
      document.getElementById('faces').src="img/3.png";
      break;
  case 4:
      document.getElementById('faces').src="img/4.png";
      break;
  case 5:
      document.getElementById('faces').src="img/5.png";
      break;
  case 6:
      document.getElementById('faces').src="img/6.png";
      break;
  default:
      break;
};