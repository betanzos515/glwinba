import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useForm } from "../../hooks/useForm";
import { Permisos } from "./Permisos";
import { SelectGroup } from "./SelectGroup"
import { ListaDocumentos } from "./ListaDocumentos";

export const SubModulo = ({ id, titulo }) => {

    const [ ListaPermisos, setListaPermisos ] = useState([]);
    const { error, mensaje } = useSelector(state => state.ui);
    
    const handleClick = e =>{
        console.log(e.target);
    }
    
    return (
        <div className="mod subModulo">
            <h2 className="subtitulo-submodulo">{ titulo }</h2>
            <Permisos setListaPermisos={setListaPermisos} />
            <ListaDocumentos idSubmodulo={ id } />
            <button 
                className="btn btnEliminarModulo" 
            >Eliminar</button>
        </div>
    )
}
