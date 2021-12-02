import { Link } from 'react-router-dom';
import '../../../../styles/ServiciosEspecializados/Tablero/contratista.css';
export const Contratista = ({data}) => {
    const { nombre, uuid, estatus } = data;
    
    const handleClick = e =>{
        e.preventDefault();
        console.log(`dando click al elemento ${e.target}`)
    }

    return (
        <Link to='/' className='cliente' id={uuid} onClick={handleClick}>
            <h2>{nombre}</h2>
            <p className={`${estatus}`}>{estatus}</p>
        </Link>
    )
}
