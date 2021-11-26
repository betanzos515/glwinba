import logo from '../../imagenes/glwinba.png';
import '../../styles/loginStyles.css';
import { Link } from 'react-router-dom';
export const RolesScreen = () => {
    return (
        <>
            <div className="login-container">
                <img src={logo} alt="Logo GLWinba"/>
                <ul>
                    <Link className='btnRoles' to='/dashboard'>Cliente</Link>    
                    <Link className='btnRoles' to='/dashboard'>Provedor</Link>    
                </ul>   
                
            </div>
        </>
    )
}