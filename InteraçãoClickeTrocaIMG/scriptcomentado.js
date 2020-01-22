// JavaScript source code

function atualizarJogador() {
    /* se gameOver for true não precisamos executar o código */
    if (gameOver == true) {
        return;
    }




    /* PARTE DA FUNÇÃO QUE TROCA A IMAGEM DO JOGADOR ATUAL */
    if (playTime === player1) {
        /* query selector all vai buscar a imagem no html 
         o caminho mostra que queremos o elemento img que está na div com ID jogador, [0] mostra qual elemento será seleionado*/
        let player = document.querySelectorAll("div#jogador img")[0];
        player.setAttribute("src", "imagens/x.png"); /* um set no atributo de jogador, no caso a imagem */
    } else  {

        let player = document.querySelectorAll("div#jogador img")[0];
            player.setAttribute("src", "imagens/o.png"); 
    }

}


/** Fução que mostra para o HTML que é necessário executar uma ação a cada clique do quadrado **/

click(){
    /*estou colocando na variável(array) espacos todos os elementos da classe espaco */
    let espacos = document.getElementsByClassName("espaco");
    /*for parar varer um elemento por um e dizer que esperamos um click*/
    //>>>>addEventListener("click" observador de evento  <<<<<<
    /*logo todas as vezes que clicarmos ele irá disparar o evento
     this.getElementsByTagName   ~~ this é o objeto que está sendo clicado
     getElementByTagName significa que ele vai pegar todo o elemento que tiver a tag x */

    //um for para percorrer lista
    for (var 1 = 0; i < espacos.length i++) {

        //um evento de click com uma função junto ("click", function(){} )
        espacos[i].addEventListener("click", function () {
            if (gameOver) { return; }

            if (this.getElementsByTagName("img").length == 0) { //se o que tem na tag img estiver vazio 


                /*se for a vez player 1 faça .. senão faça ..*/
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