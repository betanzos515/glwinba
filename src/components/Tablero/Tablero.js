import React from 'react'
import { Modulo } from './Modulo'
import '../../styles/UI/Tablero.css'
import { data } from '../../helpers/dataTablero'
export const Tablero = () => {
    return (
        <div className='tablero'>
           {
               data.map(item =>(
                    <Modulo  key={item.id} titulo={item.titulo} bg={(item.activo === true) ? item.bg : item.bg = 'bgDeshabilitado'}/>
               ))
           }
        </div>
    )
}
