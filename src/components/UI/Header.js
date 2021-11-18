import '../../styles/UI/header.css'
import React from 'react'
import logoHeader from '../../imagenes/glwinba-header.png';


export const Header = () => {
    let mensaje = 'Iniciar Sesion';
    const login = true;
    if(login){
        mensaje = 'Cerrar Sesión';
    }
    return (
        <header className='header'>
            <div className="logoContainer">
                <a href="/">
                    <img src={logoHeader} alt='logo'/>
                </a>
            </div>

            <nav>
                <ul>
                    <a href='/' className='btnInicio' >{mensaje}</a>
                </ul>
            </nav>
        </header>
    )
}
