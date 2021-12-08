import React from 'react'
import { Header } from '../UI/Header'
import { Titulo } from '../UI/Titulo'
import { FormAlta } from './FormAlta'
import { SelectCarga } from './SelectCarga'
import './styles/altaUsuario.css';

export const AltaUsuario = () => {
    return (
        <>
            <div className='contenedor'>
                <Header />
                <Titulo texto='Alta Usuario(s)'/>
                <SelectCarga />
                <FormAlta />
            </div>
        </>
    )
}
