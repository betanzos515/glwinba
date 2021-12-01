import { useState } from 'react';
import logo from '../../imagenes/glwinba.png';
import '../../styles/loginStyles.css';

import { useForm } from '../../hooks/useForm';
import { asignarUsuario } from '../../actions/user';

import { iniciarLogin, autenticarUsuario, terminoLogin } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../types/types';
import { Mensaje } from '../UI/Mensaje';

import { mensajeError, validarFormularioBlur } from '../../helpers/helpers';
import { establecerError, removerError } from '../../actions/ui';

export  const LoginScreen = ( ) => {
    
    /* Globales */
    const dispatch = useDispatch();
    const { error, mensaje } = useSelector(state => state.ui);
    const [  values, handleInputChange, resetForm ] = useForm({
        usuario:'',
        password:''
    });

    const [errorForm, setErrorFomr] = useState(
        {   
            error: false,
            msg:''
        }
    );
        
    const { usuario, password } = values;
    
    const handleClick = async e => {
        e.preventDefault();

        dispatch(iniciarLogin());
        const resultado = await autenticarUsuario(usuario,password);
        if(resultado){
            localStorage.setItem('estadoLoggin',JSON.stringify({ cargando:'false', isLogged:true }));
            dispatch({ type: types.login });
            dispatch(asignarUsuario(usuario));
        }else{
            dispatch(establecerError('Error de autenticacion'));
            setTimeout(()=>{
                dispatch(removerError());
            },2000);
            resetForm();
        }
        dispatch(terminoLogin());
    }

    const handleBlur = e =>{
        setErrorFomr(validarFormularioBlur(e));
    }

    return (
        <div className="login-container">
            { error ? <Mensaje mensaje={mensajeError(mensaje)} /> : null}
            { errorForm.error ? <p className='error'>{errorForm.msg}</p> : null }
           <img src={ logo } alt="Logo GLWinba"/>
           <form action="#">
                <input 
                    type="text" 
                    placeholder='Usuario'
                    name='usuario'
                    onBlur={handleBlur}
                    onChange={ handleInputChange }
                    value={ usuario }
                />               
                <input 
                    type="password" 
                    placeholder='Contraseña'
                    name='password'
                    onBlur={handleBlur}
                    onChange={ handleInputChange }
                    value={ password }
                />
                <button disabled={errorForm.error} className='btnEntrar' onClick={ handleClick }>Entrar</button>
                <p>¿Eres un cliente nuevo?<a href='/'>Registrate</a></p>
            </form>
        </div>
    )
}
