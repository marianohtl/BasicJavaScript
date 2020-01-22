05.11.2018

Math && Switch Case  BOTÕES IMPORTANTES!!!

Math objeto embutido que tem propriedades e funções matemáticas.


Math.PI > valor PI


Math.sqrt(64) > raíz quadrada de 8


Math.floor(1.87) >> arredonda para 1


Math.random() > gera número aleatório entre 0 e 1


 
Estrutura Switch Case - Estrutura Condicional

switch(var){
	case 1:
		document.getElementById("face").src= "face2.png";
		break;

	case 2:
		document.getElementById("face").src= "face1.png";
		break;
	default:
		//caso contrário
		break;

}



Botões para AVANÇAR , VOLTAR E REINICIAR a page

<html>
<body>
<form> 
<input type="button" value="Voltar" onClick="history.go(-1)"> 
<input type="button" value="Avançar" onCLick="history.forward()"> 
<input type="button" value="Atualizar" onClick="history.go(0)"> 
</form>
</body> 
</html>

 
