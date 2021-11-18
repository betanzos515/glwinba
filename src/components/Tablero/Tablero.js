import React from 'react'
import { Modulo } from './Modulo'
import '../../styles/UI/Tablero.css'
import { data } from '../../helpers/dataTablero'
export const Tablero = () => {
   
    return (
        <div className='tablero'>
           {
               data.map(item =>(
                    <Modulo titulo={item.titulo}/>
               ))
           }
        </div>
    )
}
