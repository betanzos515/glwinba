import { useState } from "react";
import { useSelector } from "react-redux";
import { data } from "../../helpers/dataTablero"
import { useForm } from "../../hooks/useForm";
import { Permisos } from "./Permisos";
import { SelectGroup } from "./SelectGroup"
import { ListaDocumentos } from "./ListaDocumentos";
const opciones = data.map(item => item.titulo);

export const SubModulo = ({ listaSubmodulos }) => {

    const [ values, handleInputChange, ] = useForm({ submodulo:'' });
    const [ ListaPermisos, setListaPermisos ] = useState([]);
    const [ ListaDocumento, setListaDocumentos ] = useState([]);
    
    const { submodulo } = values; 

    const { error, mensaje } = useSelector(state => state.ui);
    
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
            <ListaDocumentos/>
            <button 
                className="btn btnEliminarModulo" 
            >Eliminar</button>
        </div>
    )
}
