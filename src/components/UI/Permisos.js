import { useState } from 'react';
import { RadioButton } from './RadioButton';
import './styles/permisos.css';
import uuid from 'react-uuid';

export const Permisos = () => {
    const permisos = ['Crear','Actualizar','Visualizar','Eliminar','Descargar'];

    const [ listaPermisos, asignarListaPermiso ] = useState([]);
    
    return (
        <div className='permisos'>
            { permisos.map( item=> ( <RadioButton key={ uuid() } setPermiso={asignarListaPermiso} permisos={listaPermisos}  nombre={ item }/> ) ) }
        </div>
    )
}


