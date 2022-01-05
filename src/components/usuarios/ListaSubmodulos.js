import { useDispatch, useSelector } from 'react-redux';
import { SubModulo } from './SubModulo'

export const ListaSubmodulos = ({ modulo='', isSubmoludo }) =>{
    if(!isSubmoludo){
        return ''
    }
    return (
        <div className='form-alta lista-submodulo'>
            <h2>SubModulo</h2>
        </div>
    )
}
