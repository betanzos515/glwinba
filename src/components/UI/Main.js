import React from 'react'
import { Header } from '../UI/Header';
import '../../styles/UI/Main.css';
import { Titulo } from './Titulo';
import { Tablero } from '../Tablero/Tablero';
const data = {
    grupoEmpresarial:'Grupo Empresarial DEMO',
    usuario:'Usuario SE 01',
    rol:'Cliente'
}
const { grupoEmpresarial, usuario, rol } = data;
export const Main = () => {
    return (
        <>
            <Header/>
            <div className='main'>
                <div className='info'>
                    <p>{grupoEmpresarial}</p>
                    <p>{usuario}</p>
                    <p>{rol}</p>
                </div>
                <div className="contenedor">
                    <Titulo texto='Soluciones Tecnológicas'/>
                    <Tablero/>
                </div>
            </div>
        </>
    )
}
