import React from 'react'

//retornando dois componentes (duas funções)
const CompA = props =>
        <h1>Primeiro diz: {props.valor}</h1>


const CompB = props =>
        <h1>Segundo diz: {props.valor}</h1>



export { CompB}
export default CompA

//podemos usar o export por componente, o resultado será igual
// export const CompA = props =>
//         <h1>Primeiro diz: {props.valor}</h1>


// export const CompB = props =>
//         <h1>Segundo diz: {props.valor}</h1>

// sem usar o defaul não podemos retornar algo anônimo
// export function(){
//     return <p>função anônima</p>
// }

//isso só funciona com o default
//default export function(){
//     return <p>função anônima</p>
// }
