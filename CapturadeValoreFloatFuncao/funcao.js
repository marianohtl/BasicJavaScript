let dadoUm, dadoDois;


function escreve() {
    dadoUm = parseFloat(frmDados.txtdado1.value.replace(",", "."));
    dadoDois = parseFloat(frmDados.txtdado2.value.replace(",", "."));
    alert(dadoUm);
    alert(dadoDois);
}

