import '../../styles/UI/Main.css';

import { Header } from '../UI/Header';
import { Titulo } from './Titulo';
import { Tablero } from '../Tablero/Tablero';

import { useSelector } from 'react-redux';

export const Main = () => {

    const { usuario : user } = useSelector( state => state.user );
    const { perfil, empresa, usuario } = user;
    
    return(
        <>
            <Header/>
            <div className='main'>
                <div className='info'>
                    <p>{empresa}</p>
                    <p>{usuario}</p>
                    <p>{perfil}</p> 
                </div>
                <div className="contenedor">
                    <Titulo texto='Soluciones Tecnológicas'/>
                    <Tablero/>
                </div>
            </div>
        </>
    );
}
