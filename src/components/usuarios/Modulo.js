import { data } from "../../helpers/dataTablero"
import { SelectGroup } from "./SelectGroup"

const opciones = data.map(item => item.titulo);
export const Modulo = () => {
    return (
        <div 
            className='form-alta modulos-usuario'
        >
            <div className="form-alta mod">
                <div className="addModule">
                    <button><i className="fas fa-plus"></i></button> 
                </div>
                <SelectGroup 
                    texto='Modulo/s' 
                    opciones={opciones} 
                />
            </div>
        </div>
    )
}
