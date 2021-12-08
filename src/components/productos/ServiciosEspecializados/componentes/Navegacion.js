import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../../../styles/ServiciosEspecializados/Navegacion.css';

export const Navegacion = () => {
    return (
        <nav className='navegacion-se'>
            <NavLink 
                className={({ isActive })=>` btn dueDiligence ${ isActive ? 'dueDiligence-active' : ''}`} 
                to='/productos/servicios/dueDiligence'
            >Due Diligence </NavLink>

            <NavLink 
                className={({ isActive })=> `btn registroControl ${ isActive ? 'registroControl-active': ''}`} 
                to='/productos/servicios/registroControl'
            >Registro y Control </NavLink>

            <NavLink 
                className={({ isActive })=> `btn entregable ${ isActive ? 'entregable-active' : '' }`} 
                to='/productos/servicios/entregable'
            >Entregable</NavLink>
        </nav>
    )
}
