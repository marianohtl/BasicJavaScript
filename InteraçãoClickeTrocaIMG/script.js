const player1 = "X";
const player2 = "O";


let playTime = player1;
let gameOver = false;
atualizarJogador();
click();


function atualizarJogador() {
    if (gameOver == true) {
        return;
    }

    if (playTime === player1) {
        let player = document.querySelectorAll("div#jogador img")[0];
        player.setAttribute("src", "imagens/x.png");
    } else  {
        let player = document.querySelectorAll("div#jogador img")[0];
            player.setAttribute("src", "imagens/o.png"); 
    }

}

function click(){
    let espacos = document.getElementsByClassName("espaco");

    for (let i = 0; i < espacos.length; i++) {
        espacos[i].addEventListener("click", function () {
            if (gameOver) { return; }

            if (this.getElementsByTagName("img").length == 0) {

                if (playTime == player1) {
                    this.innerHTML = "<img src='imagens/x.png'>";
                    this.setAttribute("jogada", player1);
                    playTime = player2;

                } else {
                    this.innerHTML = "<img src='imagens/o.png'>";
                    this.setAttribute("jogada", player2);
                    playTime = player1;
                }
                atualizarJogador();
            }

        }

        );
    }
}




