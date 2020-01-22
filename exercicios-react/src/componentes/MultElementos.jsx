import React from 'react'

//formas de retornar multiplos elementos ou sejaelementos adjacentes

//com esta solução não é acrescentado nenhuma tag além das dos elementos
// export default props =>
//     <React.Fragment>           
//          <h1>Parte 1</h1>
//         <h2>Parte 1</h2>     
//     </React.Fragment>


//solução mais usada para retornar mult elementos >>div
// export default props =>
//         <div>
//             <h1>Parte 1</h1>
//             <h2>Parte 1</h2>     
//         </div>


//retornanso um array de elementos
// export default props => [
//     <h1>Parte 1</h1>,
//     <h2>Parte 2</h2>
// ]