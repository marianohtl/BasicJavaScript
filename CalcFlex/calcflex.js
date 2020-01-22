/*
 AULA 5 : CALCULADORA FLEX
 @autor Thalita Mariano*/

//vari�veis do mesmo tipo podem ser declaradas juntas
//vari�veis fora das fun��es se tornam vari�veis globais (podem ser usadas por todas as fun��es do nosso documento)


let etanol, gasolina;


function calcular() {
    /*essa fun��o atribui a vari�vel etanol o value que est� na caixa de texto
     significa pegar o valor que est� na caixa de texto que est� dentro do formul�rio frmFlex <caminho do valor>

        PARSEFLOAT CONVERTE O VALOR RECEBIDO PARA VARI�VEL TIPO FLOAT (NUM�RICO QUE ACEITA CASAS DECIMAIS)
     
     . replace troca um caracter por outro caracter
     .replace("","");
     */
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",", "."));

    if (etanol < 0.7 * gasolina) {
        document.getElementById("status").src="left.png";//pegar o elemento do documento identificado pelo ID status e coloque a imagem x.png
    } else {
        document.getElementById("status").src="right.png";

    }
}

function resetar() {
    document.getElementById("status").src = "centro.png";

}
