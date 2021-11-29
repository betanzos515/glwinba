import '../../styles/UI/header.css'
import React from 'react'
import logoHeader from '../../imagenes/glwinba-header.png';
import { Link } from 'react-router-dom';


export const Header = () => {
    let mensaje = 'Iniciar Sesion';

    return (
        <header className='header'>
            <div className="logoContainer">
                <Link to="/dashboard">
                    <img src={logoHeader} alt='logo'/>
                </Link>
            </div>
            <nav>
                <ul>
                    <Link to='/login' className='btnInicio' >{mensaje}</Link>
                </ul>
            </nav>
        </header>
    )
}
