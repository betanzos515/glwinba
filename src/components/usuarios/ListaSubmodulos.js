import { SubModulo } from './SubModulo';
export const ListaSubmodulos = ({ isSubmodulos, idModulo, submodulos }) =>{
    if(!isSubmodulos ){
        return '';
    }
    console.log(idModulo)
    return (
        <div className='form-alta lista-submodulo'>
            <h2 className='subtitulos' >Submódulos</h2>
            { submodulos.map( modulo => <SubModulo id={ modulo.id } key={ modulo.id } listaSubmodulos={ submodulos } />) }
        </div>
    )
}
