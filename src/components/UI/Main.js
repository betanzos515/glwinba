import React from 'react'
import { Header } from '../UI/Header';
import '../../styles/UI/Main.css';
import { Titulo } from './Titulo';
import { Tablero } from '../Tablero/Tablero';
import { useSelector } from 'react-redux';
import { RolesScreen } from '../auth/RolesScreen';

const data = {
    grupoEmpresarial:'Grupo Empresarial DEMO',
    usuario:'Usuario SE 01',
    rol:'Cliente'
}

export const Main = () => {
    const { grupoEmpresarial, usuario, rol } = data;

    const { roles } = useSelector(state => state.user);
    let componente = null;
    if(roles.length > 2){
        console.log('Dos roles')
        componente = <RolesScreen />
    }else{
        componente = (
        <>
            <Header/>
            <div className='main'>
                <div className='info'>
                    <p>{grupoEmpresarial}</p>
                    <p>{usuario}</p>
                    <p>{rol}</p>
                </div>
                <div className="contenedor">
                    <Titulo texto='Soluciones Tecnológicas'/>
                    <Tablero/>
                </div>
            </div>
        </>
        )
    }
    console.log(roles);

    return componente;
}
