export const SelectGroup = ({ texto, opciones=[] }) => {
    let contador=0;
    return (
        <div className="inputGroup">
            <h2>{ texto }</h2>
            <select>
                <option value=''>--Selecciona una opcion--</option>
                {opciones.map(item=>(
                    <option key={contador++} value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
}