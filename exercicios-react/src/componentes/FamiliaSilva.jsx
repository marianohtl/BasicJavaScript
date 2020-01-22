import React from 'react'
import Membro from './Membro'

export default props =>
        <div>
            {/* Colocando do componente pai para o filho via propriedade - comunicão direta*/}
            <Membro nome="Rafael" sobrenome={props.sobrenome}/>
            <Membro nome="Daniela" sobrenome="Silva"/>
            <Membro nome="Pedro" sobrenome="Silva"/>
            <Membro nome="Ana" sobrenome="Silva"/>

        </div>
