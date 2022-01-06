import uuid from "react-uuid"

export const SelectGroup = ({ 
    name,
    value,
    accion,
    texto,
    opciones
}) => {

    return (
        <div className="inputGroup">
            <h2>{ texto }</h2>
            <select
                name={ name } 
                value={ value }
                onChange={ e =>{
                    accion(e);
                }} 
            >
                <option >--Selecciona una opcion--</option>
                {opciones.map(item=>(
                    <option key={ uuid() } value={item.nombre} id={ item.id }>{item.nombre}</option>
                ))}
            </select>
        </div>
    )
}