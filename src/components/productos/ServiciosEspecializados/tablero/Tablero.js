import { ListaContratistas } from '../componentes/ListaContratistas';
import { ListaDocumentos } from '../componentes/ListaDocumentos';
import '../../../../styles/ServiciosEspecializados/Tablero/tablero.css';
export const Tablero = () => {
    return (
        <div className='container-tablero'>
            <ListaContratistas />
            <ListaDocumentos />
        </div>
    )
}
