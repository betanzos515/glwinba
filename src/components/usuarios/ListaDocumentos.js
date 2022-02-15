import { useState } from 'react';

export const ListaDocumentos = ({ idSubmodulo }) => {
    
    const [ ListaDocumentos, setListaDocumentos ] = useState([]);
    const [ cargarDocumentos, setCargarDocumentos ] = useState(false);

    const handleClick = ()=>{
        console.log('Has dado click');
        setCargarDocumentos(!cargarDocumentos);
        //realizar la busqueda de los documentos;   
    }

    const boton = <button 
        className='btn listar-documentos' 
        onClick={ handleClick }
    >Listar Documentos</button>;

    return (
        <div className='form-alta lista-documentos'>
            {
                !cargarDocumentos ? boton : null
            }
            { 
                cargarDocumentos 
                    ? <h2 className='subtitulos' >Submódulos</h2> 
                    : null
            }            
        </div>

    )
}
