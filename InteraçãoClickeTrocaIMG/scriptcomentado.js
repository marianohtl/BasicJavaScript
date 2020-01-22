// JavaScript source code

function atualizarJogador() {
    /* se gameOver for true n�o precisamos executar o c�digo */
    if (gameOver == true) {
        return;
    }




    /* PARTE DA FUN��O QUE TROCA A IMAGEM DO JOGADOR ATUAL */
    if (playTime === player1) {
        /* query selector all vai buscar a imagem no html 
         o caminho mostra que queremos o elemento img que est� na div com ID jogador, [0] mostra qual elemento ser� seleionado*/
        let player = document.querySelectorAll("div#jogador img")[0];
        player.setAttribute("src", "imagens/x.png"); /* um set no atributo de jogador, no caso a imagem */
    } else  {

        let player = document.querySelectorAll("div#jogador img")[0];
            player.setAttribute("src", "imagens/o.png"); 
    }

}


/** Fu��o que mostra para o HTML que � necess�rio executar uma a��o a cada clique do quadrado **/

click(){
    /*estou colocando na vari�vel(array) espacos todos os elementos da classe espaco */
    let espacos = document.getElementsByClassName("espaco");
    /*for parar varer um elemento por um e dizer que esperamos um click*/
    //>>>>addEventListener("click" observador de evento  <<<<<<
    /*logo todas as vezes que clicarmos ele ir� disparar o evento
     this.getElementsByTagName   ~~ this � o objeto que est� sendo clicado
     getElementByTagName significa que ele vai pegar todo o elemento que tiver a tag x */

    //um for para percorrer lista
    for (var 1 = 0; i < espacos.length i++) {

        //um evento de click com uma fun��o junto ("click", function(){} )
        espacos[i].addEventListener("click", function () {
            if (gameOver) { return; }

            if (this.getElementsByTagName("img").length == 0) { //se o que tem na tag img estiver vazio 


                /*se for a vez player 1 fa�a .. sen�o fa�a ..*/
                if (playTime == player1) {

                    this.innerHtml = "<img src='imagens/x.png'>'";//pegamos esse elemento e adicionamos ao elemento uma imagem

                    this.setAttribute("jogada", player1);/*setando atributo jogada com o valor do player1*/
                    playTime = player2;//alterando o jogador

                } else {

                    this.innerHtml = "<img src='imagens/o.png'>'";
                    this.setAttribute("jogada", player2);
                    playTime = player1;
                }
                atualizarJogador();

            }
        
        
        });

    }
}