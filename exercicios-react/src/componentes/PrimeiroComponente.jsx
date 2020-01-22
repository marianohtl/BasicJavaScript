import React from 'react';

let isLegal = true;

//sempre que quisermo referenciar um trecho, dentro do jsx usamos{}
//usamos como padrão o nome do parâmetro dos componentes funcionais como props
export default (props) => 
    <div>
        <h1>{props.valor}</h1> 
        <h1>{props.aBcE}</h1> 
        <h1>{props.aaa}</h1> 
        <p>{isLegal ? 'Sim' : 'Não' }</p> 
        <h1>{Math.random(100)}</h1> 
    </div>



//arrow function com retorno implícito
// export default () => 
//     <div>
//         <h1>Primeiro Componente (Arrow)</h1> 
//         <h2>:3</h2>
//     </div>


//função anônima
// export default function(){
//     return <h1>Primeiro Componente Anônimo</h1> 
    
// }


// function primeiro(){
//     return <h1>Primeiro Componente</h1> 
    
// }

// export default primeiro