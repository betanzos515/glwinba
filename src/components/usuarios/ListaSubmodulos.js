import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { SubModulo } from './SubModulo'

export const ListaSubmodulos = ({ modulo='', isSubmoludo }) =>{

    useEffect(()=>{
        if(isSubmoludo){
            console.log('Hola Mundo');
        }
    },[  ])

    if(!isSubmoludo){
        return ''
    }
    return (
        <div className='form-alta lista-submodulo'>
            <h2>SubModulo</h2>
        </div>
    )
}
