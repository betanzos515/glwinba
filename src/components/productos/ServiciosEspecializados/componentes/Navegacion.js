import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../../../styles/ServiciosEspecializados/Navegacion.css';

export const Navegacion = () => {
    return (
        <nav className='navegacion-se'>
            <NavLink 
                className={({ isActive })=>` btn dueDiligence ${ isActive ? 'dueDiligence-active' : ''}`} 
                to='/productos/servicios/dueDiligence'
                id='dueDiligence'
            >Due Diligence </NavLink>

            <NavLink 
                className={({ isActive })=> `btn registroControl ${ isActive ? 'registroControl-active': ''}`} 
                to='/productos/servicios/registroControl'
                id='registroControl'
            >Registro y Control </NavLink>

            <NavLink 
                className={({ isActive })=> `btn entregable ${ isActive ? 'entregable-active' : '' }`} 
                to='/productos/servicios/entregable'
                id='entregable'
            >Entregable</NavLink>
        </nav>
    )
}
