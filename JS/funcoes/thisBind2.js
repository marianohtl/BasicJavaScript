function Pessoa(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

function Pessoa2(){
    this.idade = 0

    const self = this
    setInterval(function(){
        this.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa 