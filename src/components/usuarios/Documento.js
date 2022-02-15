import { useState } from 'react';
import { SelectGroup } from './SelectGroup';
import { Permisos } from './Permisos';
import { useForm } from '../../hooks/useForm';
export const SubModulo = ({ listaSubmodulos }) => {

    const [ values, handleInputChange ] = useForm({ documento:'' }) 
    const [ StateListaPermisos, setListaPermisos ]  = useState();
    const handleClick = e =>{
        console.log(e.target);
    }

    const { documento } = values;
    console.log(StateListaPermisos);
    return (
        <div className="mod subModulo">
            <div className="addModule">
                <button onClick={ handleClick }><i className="fas fa-plus"></i></button> 
            </div>
            <SelectGroup 
                name='documento' 
                value={ documento }
                accion={ handleInputChange } 
                texto='' 
                opciones={ listaSubmodulos }
            />
            <Permisos setListaPermisos={setListaPermisos} />
            <button
                className="btn btnEliminarModulo" 
            >Eliminar</button>
        </div>
    )
}
