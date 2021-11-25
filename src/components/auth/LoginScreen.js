import logo from '../../imagenes/glwinba.png';
import '../../styles/loginStyles.css';

import { useState } from 'react'

//import { useDispatch } from 'react-redux';
//import { autenticarUsuario } from '../../actions/auth';


export  const LoginScreen = ( ) => {
    
    /* Globales */
    //const dispatch = useDispatch();

    /* Estados */
    const [ stateFormulario, setStateFormulario ] = useState({
        usuario:'',
        password:''
    })
    //const [isChecked ,setIsChecked] = useState(true);

    
    /* Funciones */
    const handleChange = (e) =>{
        setStateFormulario({
            ...stateFormulario,
            [e.target.name] :  e.target.value
        });
    }

    const handleClick = async e => {
        e.preventDefault();
        //const { usuario, password } = stateFormulario;
        //const resultado = autenticarUsuario(usuario,password);
        //dispatch(resultado);
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

                <button className='btnEntrar' onClick={ handleClick }>Entrar</button>
                <p>¿Eres un cliente nuevo?<a href='/'>Registrate</a></p>
            </form>
        </div>
    )
}
