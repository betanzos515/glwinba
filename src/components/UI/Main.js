import { useEffect } from 'react'
import '../../styles/UI/Main.css';

import { Header } from '../UI/Header';
import { Titulo } from './Titulo';
import { Tablero } from '../Tablero/Tablero';

import { useNavigate } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

import { asignarPerfil } from '../../actions/user';


export const Main = () => {

    const { usuario : user } = useSelector(state => state.user);
    const { perfiles, perfil, empresa, usuario } = user;
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        if(perfiles.length === 2 && perfil===''){
            navigate('/perfiles',{replace:true});
        }else{
            dispatch(asignarPerfil( perfil ));
        }
    },[navigate, perfiles, dispatch, perfil])

    return (
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
