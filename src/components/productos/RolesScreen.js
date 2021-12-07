import logo from '../../imagenes/glwinba.png';
import '../../styles/loginStyles.css';
import { Link } from 'react-router-dom';

export const RolesScreen = () => {
    
    const handleClick = () =>{
        console.log('Entrando...');
    }

    return (
        <div className="login-container">
            <img src={logo} alt="Logo GLWinba"/>
            <ul>
                <Link 
                    className='btnRoles'
                    replace to='/productos/servicios'
                    onClick={ handleClick }
                >Cliente</Link>
                
                <Link 
                    className='btnRoles' 
                    replace to='/productos/servicios'
                    onClick={ handleClick }
                >Provedor</Link>    
            </ul>   
            
        </div>
    )
}
