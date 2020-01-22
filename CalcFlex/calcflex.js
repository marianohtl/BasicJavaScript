/*
 AULA 5 : CALCULADORA FLEX
 @autor Thalita Mariano*/

//variáveis do mesmo tipo podem ser declaradas juntas
//variáveis fora das funções se tornam variáveis globais (podem ser usadas por todas as funções do nosso documento)


let etanol, gasolina;


function calcular() {
    /*essa função atribui a variável etanol o value que está na caixa de texto
     significa pegar o valor que está na caixa de texto que está dentro do formulário frmFlex <caminho do valor>

        PARSEFLOAT CONVERTE O VALOR RECEBIDO PARA VARIÁVEL TIPO FLOAT (NUMÉRICO QUE ACEITA CASAS DECIMAIS)
     
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
