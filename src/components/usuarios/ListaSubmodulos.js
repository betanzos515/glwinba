import { SubModulo } from './SubModulo'

export const ListaSubmodulos = ({ isSubModulo }) =>{
    return (
        <div className='form-alta lista-submodulo'>
            <SubModulo titulo='Submodulo/s' validado={true}/>
        </div>
    )
}
