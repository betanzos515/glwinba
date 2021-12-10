import { RadioButton } from './RadioButton';
import './styles/permisos.css';

export const Permisos = () => {
    const permisos = ['Crear','Actualizar','Visualizar','Eliminar','Descargar'];
    let contador = 0;
    
    return (
        <div className='permisos'>
            { permisos.map( item=> ( <RadioButton key={ contador++ } nombre={ item }/> ) ) }
        </div>
    )
}


