import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { agregarModulo } from "../../actions/registrarUsuario";
import { data } from "../../helpers/dataTablero"
import { Permisos } from "../UI/Permisos";
import { SelectGroup } from "./SelectGroup";
import { ListaSubmodulos } from './ListaSubmodulos';

const opciones = data.map(item => item.titulo);

export const Modulo = ({ titulo='', id }) => {
    
    const dispatch = useDispatch();
    
    const [ state, setState ] = useState({
        uuid:id,
        nombre:'',
        permisos:[],
        isSubmodulos:false,
        listaSubmodulo:[]
    });

    const handleClick = e =>{
        dispatch( agregarModulo() );
    }

    return (
        <div className="form-alta mod">
            <div className="addModule">
                <button onClick={ handleClick }><i className="fas fa-plus"></i></button>
            </div>
            <SelectGroup 
                texto={ titulo } 
                opciones={ opciones } 
            />
            <Permisos />
            <ListaSubmodulos />
            <button className="btn btnEliminarModulo" >Eliminar</button>
        </div>
    )
}
