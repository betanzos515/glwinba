import { useState } from "react";
import "./styles/permisos.css";

export const Permisos = () => {
  const permisos = [
    {
        nombre:"Crear",
        isChecked:false
    },
    {
        nombre:"Actualizar",
        isChecked:false
    },
    {
        nombre:"Visualizar",
        isChecked:false
    },
    {
        nombre:"Eliminar",
        isChecked:false
    },
    {
        nombre:"Descargar",
        isChecked:false
    }
  ];

  const [ listaPermisos , asignarListaPermiso ] = useState([]);
  const [ isChecked , setIsChecked ] = useState( false );

  const handleChange = e =>{
    setIsChecked(!isChecked);
  }

  return (
    <div className="permisos">
      <div className='radio'>
            <input  
                type="checkbox" 
                onChange={ e=>handleChange(e) } 
                name={ permisos[0] } 
                value={ permisos[0] } 
                checked={ isChecked }
            />
            <label>{ permisos[0] }</label>
        </div>
        <div className='radio'>
            <input  
                type="checkbox" 
                onChange={ e=>handleChange(e) } 
                name={ permisos[1] } 
                value={ permisos[1] } 
                checked={ isChecked }
            />
            <label>{ permisos[1] }</label>
        </div>
        <div className='radio'>
            <input  
                type="checkbox" 
                onChange={ e=>handleChange(e) } 
                name={ permisos[2] } 
                value={ permisos[2] } 
                checked={ isChecked }
            />
            <label>{ permisos[2] }</label>
        </div>
        <div className='radio'>
            <input  
                type="checkbox" 
                onChange={ e=>handleChange(e) } 
                name={ permisos[3] } 
                value={ permisos[3] } 
                checked={ isChecked }
            />
            <label>{ permisos[3] }</label>
        </div>
        <div className='radio'>
            <input  
                type="checkbox" 
                onChange={ e=>handleChange(e) } 
                name={ permisos[4] } 
                value={ permisos[4] } 
                checked={ isChecked }
            />
            <label>{ permisos[4] }</label>
        </div>
    </div>
  );
};
