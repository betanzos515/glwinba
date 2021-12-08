
export const Mensaje = ({ mensaje }) => {
    const { msg, tipo, icono } = mensaje;
    return (
        <div className={tipo} ><i className={icono}></i>{ msg }</div>
    )
}
