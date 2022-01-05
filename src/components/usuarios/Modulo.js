import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { agregarModulo, eliminarModulo } from "../../actions/registrarUsuario";
import { data } from "../../helpers/dataTablero"
import { SelectGroup } from "./SelectGroup";
import { ListaSubmodulos } from './ListaSubmodulos';
import { Permisos } from "./Permisos";
import { useForm } from "../../hooks/useForm";
import { isSubmodulosFunction, obtenerSubmodulos } from "../../helpers/helpers";


const opciones = data.map(item => item.nombre);

export const Modulo = ({ id }) => {
    
    const [ values, handleInputChange, ] = useForm({ modulo:'' });
    const [ isSubmodulos, setIsSubmodulo ] = useState(false);
    const [ permisos, setListaPermisos ] = useState([])
    
    const { modulo } = values; 
    
    useEffect(() => {
        setIsSubmodulo(isSubmodulosFunction( modulo ));
        console.log(permisos);
    }, [modulo]);

    useEffect(()=>{
        if(isSubmodulos){

        }
    },[isSubmodulos])

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
