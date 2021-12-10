import { useState } from "react";
import { data } from "../../helpers/dataTablero"
import { Permisos } from "../UI/Permisos";
import { SelectGroup } from "./SelectGroup"

const opciones = data.map(item => item.titulo);

export const SubModulo = ({ titulo }) => {

    const [ isSubModulos, setIsSubModulos ] = useState(true);

    const handleClick = e =>{
        console.log(e.target);
    }

    return (
        <div className="mod subModulo">
            <div className="addModule">
                <button onClick={ handleClick }><i className="fas fa-plus"></i></button> 
            </div>
            <SelectGroup 
                texto={ titulo } 
                opciones={opciones} 
            />
            <Permisos />
        </div>
    )
}
