import { useState,useEffect } from "react";

export const RadioButton = ({ permiso, asignarPermiso, listaPermisos }) => {
    
    const { nombre,  } = permiso;
    const [ state, setState ] = useState(false)
    
    useEffect(() => {
        if(nombre){
            const elemento = listaPermisos.map( permiso => permiso.nombre === nombre ? { nombre: permiso.nombre, isChecked: state } : permiso );
            asignarPermiso(elemento);
        }
        
    //eslint-disable-next-line
    }, [state]);

    const handleChange = () =>{
        setState(!state);
    }

    return (
        <div className='radio'>
            <input 
                type="checkbox" 
                id={ nombre }
                onChange={ handleChange }  
                name={ nombre } 
                value={ nombre }
                checked={ state }
            />
            <label>{ nombre }</label>
        </div>
    )
}
