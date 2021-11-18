import React from 'react'
import { Header } from '../UI/Header';
import '../../styles/UI/Main.css';
import { Titulo } from './Titulo';
import { Tablero } from '../Tablero/Tablero';

export const Main = () => {
    return (
        <>
            <Header/>
            <div className='main'>
                <div className='info'>
                    <p>Grupo Empresarial</p>
                    <p>Usuario</p>
                    <p>Rol</p>
                </div>
                <div className="contenedor">
                    <Titulo texto='Soluciones Tecnológicas'/>
                    <Tablero/>
                </div>
                
            </div>
        </>
    )
}
