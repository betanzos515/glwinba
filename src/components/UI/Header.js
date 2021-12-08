import '../../styles/UI/header.css'
import logoHeader from '../../imagenes/glwinba-header.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { cerrarSesion } from '../../actions/auth';


export const Header = () => {
    const { isLogged } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    let mensaje;
    if(isLogged){
        mensaje = 'Cerrar Sesión';
    }else{
        mensaje = 'Iniciar Sesión';
    }

    const handleClick = () =>{
        if(isLogged){
            dispatch(cerrarSesion());
            
            localStorage.removeItem('estadoLoggin');
            localStorage.removeItem('usuarioActual');
        }
    }

    return (
        <header className='header'>
            <div className="logoContainer">
                <Link to="/">
                    <img src={logoHeader} alt='logo'/>
                </Link>
            </div>
            <nav>
                <ul>
                    <Link to='/login' className=' btn btnInicio' onClick={handleClick} >{mensaje}</Link>
                </ul>
            </nav>
        </header>
    )
}
