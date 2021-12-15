import { SubModulo } from './SubModulo'
import uuid from 'react-uuid';


export const ListaSubmodulos = ({ isSubModulo }) =>{
    let submodulos=[];
    if(submodulos.length === 0){
        return ''
    }
    return (
        <div className='form-alta lista-submodulo'>
            { submodulos }
        </div>
    )
}
