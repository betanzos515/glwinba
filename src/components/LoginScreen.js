import React from 'react'
import logo from '../../imagenes/glwinba.png';

import '../../styles/loginStyles.css'
export  const LoginScreen = () => {
    return (
        <div className="login-container">
           <img src={logo} alt="Logo GLWinba"/>
           <form action="#">
               <input type="text" placeholder='Usuario'></input>
               <input type="password" placeholder='Contraseña'></input>
               <button className='btnEntrar'>Entrar</button>
               <p>¿Eres un cliente nuevo?<span>Registrate</span></p>
           </form>
        </div>
    )
}
