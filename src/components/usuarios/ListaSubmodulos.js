import { SubModulo } from './SubModulo'
import uuid from 'react-uuid';


export const ListaSubmodulos = ({ isSubModulo }) =>{
    const submodulos = [ <SubModulo key={uuid()} />, <SubModulo key={uuid()} />, <SubModulo key={uuid()} /> ];
    return (
        <div className='form-alta lista-submodulo'>
            { submodulos }
        </div>
    )
}
