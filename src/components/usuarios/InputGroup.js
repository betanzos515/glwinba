
export const InputGroup = ({ texto, name, value, accion, tipo='text' }) => {
    return (
        <div className="inputGroup">
            <h2>{ texto }</h2>
            <input
                value={ value }
                name={ name }
                onChange={ accion }
                type={ tipo }
            />
        </div>
    )
}
