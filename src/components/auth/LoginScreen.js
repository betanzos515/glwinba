import logo from '../../imagenes/glwinba.png';
import '../../styles/loginStyles.css';


import { useDispatch, useSelector } from 'react-redux';
import { iniciarLogin, autenticarUsuario, terminoLogin } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';
import { asignarUsuario } from '../../actions/user';


export  const LoginScreen = ( ) => {
    
    /* Globales */
    const dispatch = useDispatch();
    const { error, mensaje } = useSelector(state => state.ui);
    
    const [  values, handleInputChange, resetForm ] = useForm({
        usuario:'',
        password:''
    });

    const { usuario, password } = values;

    const handleClick = async e => {
        e.preventDefault();

        dispatch(iniciarLogin());
        const resultado = await autenticarUsuario(usuario,password);
        if(resultado){
            dispatch(asignarUsuario(usuario));
            console.log('Usuario asignado...');
        }else{
            console.log('Error de autenticación...');
        }

        dispatch(terminoLogin());
        resetForm();
    }

    return (
        <div className="login-container">
           <img src={ logo } alt="Logo GLWinba"/>
           <form action="#">
                { error ? <p>{ mensaje }</p> : null }
                <input 
                    type="text" 
                    placeholder='Usuario'
                    name='usuario'
                    onChange={ handleInputChange }
                    value={ usuario }
                />               
                <input 
                    type="password" 
                    placeholder='Contraseña'
                    name='password'
                    onChange={ handleInputChange }
                    value={ password }
                />
                <button className='btnEntrar' onClick={ handleClick }>Entrar</button>
                <p>¿Eres un cliente nuevo?<a href='/'>Registrate</a></p>
            </form>
        </div>
    )
}
