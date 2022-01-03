import { useState, useEffect } from 'react';
import { permisos } from '../../helpers/helpers';
import { RadioButton } from './RadioButton';
import './styles/permisos.css';

export const Permisos = ({ accion }) => {

    const [ listaPermisos, asignarListaPermiso ] = useState(permisos);
    useEffect(() => {
        if(listaPermisos){
            accion( listaPermisos )
        }
    }, [ listaPermisos ])
    return (
        <div className='permisos'>
            { permisos.map( permiso => 
                <RadioButton 
                    key={permiso.nombre}
                    permiso={ permiso }
                    asignarPermiso={ asignarListaPermiso }  
                    listaPermisos={ listaPermisos }
            /> )}
        </div>
    )
}


