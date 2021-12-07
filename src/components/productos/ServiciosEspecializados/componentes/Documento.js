import './styles/documento.css';
export const Documento = ({ data }) => {

    const { titulo, estatus, nombre,fecha,score } = data;

    const handleClick = e =>{
        console.log(e.target);
        console.log('Has dado click ...');
    }

    return (
        <div className='documento'>
            <tr>
                <td className='titulo'><p>{ titulo }</p></td>
                <td className='upload' onClick={handleClick}><i className="fas fa-upload"></i></td>
                { 
                    score !== '' ? ( <td className='score'><p>Score: { score }%</p></td> ) : null
                }
                <td className={`estatus ${ estatus }`}><p>{ estatus }</p> </td>
                <td className='nombre'><p>{ nombre }</p> </td>
                <td className='fecha'><p>{ fecha }</p></td>
                <td className='eliminar'><i className="far fa-trash-alt"></i> </td>
            </tr>
        </div>
    )
}
