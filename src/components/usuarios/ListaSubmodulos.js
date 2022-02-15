import { useEffect, useState } from 'react';
import { SubModulo } from './SubModulo';
export const ListaSubmodulos = ({ isSubmodulos, idModulo , submodulos }) =>{
    
    if(!isSubmodulos ){
        return '';
    }
    console.log(submodulos);
    return (
        <div className='form-alta lista-submodulo'>
            <h2 className='subtitulos' >Submódulos</h2>
            { submodulos.map( modulo => 
                <SubModulo  
                    id={ modulo.id } 
                    titulo={ modulo.nombre }
                    key={ modulo.id }
                />
            )}
        </div>
    )
}
