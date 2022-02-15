import { useState } from 'react';
import '../../../../styles/ServiciosEspecializados/Tablero/listaDocumentos.css';
import { Carga } from './Carga';
import { Documento } from './Documento';
export const ListaDocumentos = () => {
    const [ cargarDocumento, setCargarDocumento ] = useState(false)
    const documentos = [
        {   
            id:'12312341',
            titulo:'Fotografias',
            estatus:'incompleto',
            nombre:'Documento 01.doc',
            fecha:'12/03/2021',
            score:''
        },
        {
            id:'14as453',
            titulo:'Documentación',
            estatus:'completo',
            nombre:'Documento 01.pdf',
            fecha:'12/06/2021',
            score:''
        },
        {
            id:'120f935',
            titulo:'Papeles de Trabajo',
            estatus:'completo',
            nombre:'Documentos.pdf',
            fecha:'15/02/2021',
            score:''
        },
        {
            id:'19r9jgnw84',
            titulo:'Carta de Aceptación',
            estatus:'incompleto',
            nombre:'Documento 02.doc',
            fecha:'13/02/2021',
            score:''
        }
    ]

    return (
        <div className='lista-documentos'>
            <div className='header-documentos'>
                Documentos
            </div>
            {}
            { <table className='lista'>
                { documentos.map( 
                    item =><Documento 
                                key={item.id} 
                                data={ item } 
                                setCargarDocumento={ setCargarDocumento }
                            />) 
                }
            </table>}
            { cargarDocumento ? <Carga setCargarDocumento={ setCargarDocumento }/> : null}
        </div>
    )
}
