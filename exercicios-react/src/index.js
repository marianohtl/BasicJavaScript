import ReactDom from 'react-dom'
import React from 'react'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
// import MultElementos from './componentes/MultElementos'

//podemos usar o import como padrão e como múltiplos, export padrão nos permite nomeá-lo como quisermos, ex. compA pode se chamar A
// import CompA, {CompB as B} from './componentes/DoisComponentes'

import FamiliaSilva from './componentes/FamiliaSilva'

import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root');

//escrevendo no index do public, onde se encontra a div root, hello world
//ReactDom.render("Hello World", elemento);
 
// após importarmos o React conseguimos escrever com o jsx
//ReactDom.render(<h1>Hello World ...</h1>, elemento);

ReactDom.render(
    
    <div>
        <Familia>
            <Membro nome="Andre" sobrenome="Pereira"/>
            <Membro nome="Mariano" sobrenome="Arruda"/>
            <Membro nome="Fernanda" sobrenome="Arruda"/>
        </Familia>

{/*  passando propriedade para o componente filho via propriedades */}
    <FamiliaSilva sobrenome="Diferente"></FamiliaSilva>

    {/* <CompA valor="Olá eu sou A!"></CompA>
    <CompB valor="B na área"></CompB> */}

    {/* <MultElementos></MultElementos> */}
    
    {/* <PrimeiroComponente valor="Good morning!"  aBcE={1 + 3} aaa={Math.pow(2,2)}/>
     */}
    
    {/* Podemos colocar mais de um componente, desde que esteja dentro da div
    <PrimeiroComponente/>  */}
    </div>
    , elemento);

