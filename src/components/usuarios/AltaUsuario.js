import React from 'react'
import { Header } from '../UI/Header'
import { Titulo } from '../UI/Titulo'
import { FormAlta } from './FormAlta'

export const AltaUsuario = () => {
    return (
        <>
            <div className='contenedor'>
                <Header />
                <Titulo texto='Alta Usuario'/>
                <FormAlta />
            </div>
        </>
    )
}
