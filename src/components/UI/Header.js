import '../../styles/UI/header.css'
import React from 'react'
import logoHeader from '../../imagenes/glwinba-header.png';


export const Header = () => {
    let mensaje = 'Iniciar Sesión';
    return (
        <header className='header'>
            <div className="logoContainer">
                <img src={logoHeader}/>
            </div>

            <nav>
                <ul>
                    <a href='#'>{mensaje}</a>
                </ul>
            </nav>
        </header>
    )
}
