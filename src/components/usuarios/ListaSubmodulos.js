import { useSelector } from 'react-redux';
import { SubModulo } from './SubModulo'

export const ListaSubmodulos = ({ isSubmoludo }) =>{

    if(!isSubmoludo){
        return ''
    }
    return (
        <div className='form-alta lista-submodulo'>
            <h2>SubModulo</h2>
        </div>
    )
}
