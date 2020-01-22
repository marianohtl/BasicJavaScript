function tabuada(){
let num = document.getElementById('tnum')
let tab= document.getElementById('stab')

if(num.value.length == 0 ){ // verificar se o input está vazio
    window.alert ('Por favor, digite um número')
   
} else{
    let n = Number (num.value) //convertendo para número
    let cont= 1

    tab.innerHTML=''//limpar o select vai limpar a caixa de texto

    while(cont<=10){
        /*
        Adicionar o elemento dentro do SELECT 
        <select>
        <option value=""></option>
        <option value=""></option>
        </select>*/
         let item = document.createElement('option')

        //calculo da tabuada
        item.text= `${n} x ${cont} = ${n*cont}`
        // item.text- é a parte de dentro do option 
        item.value = `tab${cont}` // 6*1=6 1ºvalor ; 6*2=12 2ºvalor, e assim consecutivamente
        tab.appendChild(item)//adcionar o elemento filho do select
        cont ++

}
}
}

