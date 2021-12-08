import '../../../../styles/ServiciosEspecializados/Tablero/contratista.css';


export const Contratista = ({ data }) => {
    const { nombre, uuid, estatus } = data;

    const handleClick = e =>{
        e.preventDefault();
        const elemento = e.target.classList;
        if(elemento[0]==='capa'){
            console.log('Has dado click al elemento')
            console.log(e.target.parentElement.id);
        }else{
            console.log('No has dado click en el elemento');
        }
    }

    return (
        <div to='/' className='cliente' id={ uuid } onClick={ handleClick }>
            <div className='capa'></div>
            <h2>{ nombre }</h2>
            <p className={`${ estatus }`}>{ estatus }</p>
        </div>
    )
}
