import { SelectGroup } from './SelectGroup';
import { Permisos } from './Permisos';

export const SubModulo = ({ listaSubmodulos }) => {

    const handleClick = e =>{
        console.log(e.target);
    }
    
    return (
        <div className="mod subModulo">
            <div className="addModule">
                <button onClick={ handleClick }><i className="fas fa-plus"></i></button> 
            </div>
            <SelectGroup 
                name='submodulo' 
                value={ submodulo }
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
