import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { agregarModulo, eliminarModulo } from "../../actions/registrarUsuario";
import { data } from "../../helpers/dataTablero"
import { SelectGroup } from "./SelectGroup";
import { ListaSubmodulos } from './ListaSubmodulos';
import { Permisos } from "./Permisos";
import { useForm } from "../../hooks/useForm";
import { isSubmodulosFunction, obtenerSubmodulos } from "../../helpers/helpers";


const opciones = data.map(item => item);

export const Modulo = ({ id }) => {
    
    const [ values, handleInputChange, ] = useForm({ modulo:'' });
    const [ isSubmodulos, setIsSubmodulo ] = useState(false);
    const [ permisos, setListaPermisos ] = useState([])
    
    const dispatch = useDispatch();

    const { modulo } = values; 
    
    useEffect(() => {
        setIsSubmodulo(isSubmodulosFunction( modulo ));
    }, [modulo]);

    useEffect(()=>{
        if(isSubmodulos){

        }
    },[isSubmodulos])


    const handleClick = e =>{
        const clases = e.target.classList;
        
        if(clases.contains('fas')){
            dispatch(agregarModulo());
        }
        
        if(clases.contains('btnEliminarModulo')){
            dispatch(eliminarModulo(id));
        } 
    }

    return (
        <div className="form-alta mod">
            <div className="addModule">
                <button 
                    onClick={ handleClick }
                ><i className="fas fa-plus"></i>
                </button>
            </div>
            <SelectGroup 
               name='modulo' 
               value={ modulo }
               accion={ handleInputChange } 
               texto='' 
               opciones={ opciones }
            />
            <Permisos 
                setListaPermisos={ setListaPermisos } 
            />
            <ListaSubmodulos 
                modulo={ modulo }
                isSubmoludo={ isSubmodulos } 
            />
            <button 
                onClick={ handleClick } 
                className="btn btnEliminarModulo" 
            >Eliminar</button>
        </div>
    )
}
