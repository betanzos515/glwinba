import { useState } from 'react';
import { permisos } from '../../helpers/helpers';
import { RadioButton } from './RadioButton';
import './styles/permisos.css';

export const Permisos = () => {

    const [ listaPermisos, asignarListaPermiso ] = useState(permisos);
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


