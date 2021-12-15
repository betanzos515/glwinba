import { useState } from "react";
import { useDispatch } from "react-redux";
import { agregarModulo } from "../../actions/registrarUsuario";
import { data } from "../../helpers/dataTablero"
import { Permisos } from "../UI/Permisos";
import { ListaSubmodulos } from "./ListaSubmodulos";
import { SelectGroup } from "./SelectGroup"

const opciones = data.map(item => item.titulo);

export const Modulo = ({ titulo='', id }) => {
    
    const dispatch = useDispatch();
    const [ state, setState ] = useState({
        uuid:'',
        nombre:'',
        permisos:[],
        isSubmodulos:false,
        listaSubmodulo:[]
    });
    const handleClick = e =>{
        dispatch(agregarModulo());
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
        </div>
    )
}
