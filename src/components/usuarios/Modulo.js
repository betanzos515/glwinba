import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { agregarModulo, eliminarModulo } from "../../actions/registrarUsuario";
import { data } from "../../helpers/dataTablero"
import { SelectGroup } from "./SelectGroup";
import { ListaSubmodulos } from './ListaSubmodulos';
import { Permisos } from "./Permisos";
import { useForm } from "../../hooks/useForm";
import { initialStateModulo, isSubmodulosFunction } from "../../helpers/helpers";


const opciones = data.map(item => item.titulo);

export const Modulo = ({ titulo='', id }) => {
    
    const [ values, handleInputChange, ] = useForm(initialStateModulo)
    const { modulo, permisos, isSubmodulos, subMoludos } = values; 

    useEffect(() => {
        console.log(modulo);
        const checkSubmodulos = isSubmodulosFunction( modulo ); //enviamos el nombre del módulo.
    }, [modulo])
    
    const dispatch = useDispatch();

    const handleClick = e =>{
        const clases = e.target.classList;
        
        if(clases.contains('fas')){
            console.log('agregar modulo');
            dispatch(agregarModulo());
        }
        
        if(clases.contains('btnEliminarModulo')){
            dispatch(eliminarModulo(id));
            console.log('Eliminar Modulo');
        }
    }

    const handleChange = valor =>{
        console.log('ah cambiado el valor de :',valor);
    }
    

  
    return (
        <div className="form-alta mod">
            <div className="addModule">
                <button onClick={ handleClick }><i className="fas fa-plus"></i></button>
            </div>
            <SelectGroup 
               name='modulo' 
               value={ modulo }
               accion={ handleInputChange } 
               texto='' 
               opciones={ opciones }
            />
            <Permisos accion={ handleChange } />
            <ListaSubmodulos isSubmoludo={ isSubmodulos } />
            <button onClick={ handleClick } className="btn btnEliminarModulo" >Eliminar</button>
        </div>
    )
}
