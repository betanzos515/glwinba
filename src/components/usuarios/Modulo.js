import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregarModulo, eliminarModulo } from "../../actions/registrarUsuario";
import { data } from "../../helpers/dataTablero"
import { SelectGroup } from "./SelectGroup";
import { ListaSubmodulos } from './ListaSubmodulos';
import { Permisos } from "./Permisos";
import { useForm } from "../../hooks/useForm";
import { getIsSubmodulos, getSubmodulos, mensajeError, mensajeSucces } from "../../helpers/helpers";
import { permisos } from "../../helpers/dataModulos";
import { establecerError, removerError } from "../../actions/ui";
import { Mensaje } from "../UI/Mensaje";

const opciones = data.map(item => item);

export const Modulo = ({ id }) => {

    const auxiliar = {
        nombre:'',
        permisos:[],
        isSubmodulos:false,
        submodulos:[]
    }
    
    const [ values, handleInputChange, ] = useForm({ modulo:'' });
    const [ isSubmodulos, setIsSubmodulo ] = useState(false);
    const [ ListaPermisos, setListaPermisos ] = useState([]);
    const [ ListaSubmodulosState, setListaSubmodulos ] = useState([]);

    // const {  nombre, permisos, isSubmodulo, submodulos } = useSelector(state => state.moduloActual);
    const dispatch = useDispatch();
    const { error, mensaje } = useSelector(state => state.ui);

    const { modulo } = values; 
    
    useEffect(() => {
        auxiliar.nombre = modulo;
        setIsSubmodulo(getIsSubmodulos(modulo));
    }, [modulo])

    useEffect(()=>{
        auxiliar.permisos = permisos;
    },[ListaPermisos]);

    useEffect(()=>{
        auxiliar.isSubmodulos = isSubmodulos
        isSubmodulos ? setListaSubmodulos(getSubmodulos(modulo)) : setListaSubmodulos([])
    },[isSubmodulos]);

    useEffect(()=>{
        auxiliar.submodulos = ListaSubmodulos
    },[ListaSubmodulosState]);
    
    const handleClick = e =>{
        const clases = e.target.classList;

        if(clases.contains('fas')){
            if( modulo === '' || permisos === [] ){
                dispatch(establecerError(' Existen campos vacios'));
                setTimeout(()=>{
                    dispatch(removerError());
                },2000);
                
            }else{
                dispatch(agregarModulo());
            }
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
