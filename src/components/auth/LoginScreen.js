import React, { useState } from 'react'
import logo from '../../imagenes/glwinba.png';
import '../../styles/loginStyles.css';
//import { useNavigate } from 'react-router-dom';

export  const LoginScreen = ( ) => {

    const [ stateFormulario, setStateFormulario ] = useState({
        usuario:'',
        password:''
    })
    const handleChange = (e) =>{
        setStateFormulario({
            ...stateFormulario,
            [e.target.name] :  e.target.value
        });
    }

    const handleClick = e =>{
        e.preventDefault();

    }

    return (
        <div className="login-container">
           <img src={logo} alt="Logo GLWinba"/>
           <form action="#">
                <input 
                    type="text" 
                    placeholder='Usuario'
                    name='usuario'
                    onChange={handleChange}
                />               
                <input 
                    type="password" 
                    placeholder='Contraseña'
                    name='password'
                    onChange={handleChange}
                />

                <button className='btnEntrar' onClick={handleClick}>Entrar</button>
                <p>¿Eres un cliente nuevo?<a href='/'>Registrate</a></p>
            </form>
        </div>
    )
}
