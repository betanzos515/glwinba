import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregarModulo, eliminarModulo } from "../../actions/registrarUsuario";
import { data } from "../../helpers/dataTablero"
import { SelectGroup } from "./SelectGroup";
import { ListaSubmodulos } from './ListaSubmodulos';
import { Permisos } from "./Permisos";
import { useForm } from "../../hooks/useForm";
import { getIsSubmodulos, getSubmodulos, mensajeError } from "../../helpers/helpers";
import { permisos } from "../../helpers/dataModulos";
import { establecerError, removerError } from "../../actions/ui";
import { Mensaje } from "../UI/Mensaje";
import { 
    setNombreModuloActual,
    setPermisosModuloActual,
    setIsSubModulodModuloActual,
    setListaSubmodulosModuloActual 
} from "../../actions/moduloActual";

const opciones = data.map(item => item);

export const Modulo = ({ id }) => {

    const [ values, handleInputChange, ] = useForm({ modulo:'' });
    const [ isSubmodulos, setIsSubmodulo ] = useState(false);
    const [ ListaPermisos, setListaPermisos ] = useState([]);
    const [ ListaSubmodulosState, setListaSubmodulos ] = useState([]);
    const [ StateSubmodulos, setStateSubmodulos ] = useState(false)
    
    const dispatch = useDispatch();
    
    const { error, mensaje } = useSelector(state => state.ui);
    const { modulo } = values; 

    useEffect(() => {
        setIsSubmodulo(getIsSubmodulos(modulo));
        dispatch(setNombreModuloActual(modulo));
        // eslint-disable-next-line
    }, [modulo])

    useEffect(()=>{
            dispatch(setPermisosModuloActual(ListaPermisos));
        // eslint-disable-next-line
    },[ListaPermisos]);

    useEffect(()=>{
        isSubmodulos ? setListaSubmodulos(getSubmodulos(modulo)) : setListaSubmodulos([])
        dispatch(setIsSubModulodModuloActual(isSubmodulos));
        // eslint-disable-next-line
    },[isSubmodulos]);

    useEffect(()=>{
        dispatch(setListaSubmodulosModuloActual(ListaSubmodulosState));
        // eslint-disable-next-line
    },[ListaSubmodulosState]);
    
    const handleClick = e =>{
        const clases = e.target.classList;
        const comprobarPermisos = ListaPermisos.reduce(( acum, item )=> acum + item.isChecked ,0);

        if(clases.contains('fas')){
            if(modulo === '' && comprobarPermisos === 0){
                dispatch(establecerError('Todos los campos son obligatorios'));
                    setTimeout(()=>{
                        dispatch(removerError());
                    },2000);
                    return;
            }

            if(!modulo){
                    dispatch(establecerError(' Tienes que seleccionar un Módulo'));
                    setTimeout(()=>{
                        dispatch(removerError());
                    },2000);
                    return;
            }

            if(!comprobarPermisos){
                dispatch(establecerError(' Tienes que seleccionar mínimo un permiso'));
                setTimeout(()=>{
                    dispatch(removerError());
                },2000);
                return;
            }
            dispatch(agregarModulo());
            //dispatch(establecerInfoModulo());
        }
        
        if(clases.contains('btnEliminarModulo')){
            dispatch(eliminarModulo(id));
        } 
    }

    return (
        <div className="form-alta mod">
            { error ? <Mensaje mensaje={ mensajeError(mensaje) }/> : null}
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
                idModulo={id}
                setStateSubmodulos={setStateSubmodulos}

            />
            <button 
                onClick={ handleClick } 
                className="btn btnEliminarModulo" 
            >Eliminar</button>
        </div>
    )
}
