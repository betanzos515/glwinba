import { useEffect, useState } from 'react';
import { validarFormularioUsuario } from '../../helpers/helpers';
import { useForm } from '../../hooks/useForm';
import { Mensaje } from '../UI/Mensaje';
import { InputGroup } from './InputGroup';
import { ListaModulos } from './ListaModulos';
import { SelectGroup } from './SelectGroup';

import './styles/formAlta.css';


export const FormAlta = () => {
    const [ errorForm, setErroForm ] = useState({
        error: false,
        msg:''
    });
    const [ values, handleInputChange, resetForm ] = useForm({
        grupoEmpresarial:'',
        razonSocial:'',
        RFC:'',
        perfíles:'',
        nombreContactoEmpresarial:'',
        emailContactoEmpresarial:'',
        CIEC:'',
        FIEL:'',
        emailPersonal:'',
        nombre:'',
        password:'',
        relacionComercial:''
    });

    const { 
        grupoEmpresarial,
        razonSocial,
        RFC,
        perfíles,
        nombreContactoEmpresarial,
        emailContactoEmpresarial,
        CIEC,
        FIEL,
        emailPersonal,
        nombre,
        password,
        relacionComercia,
    } = values;

    const validarCampos = () =>{
         return (( values.RFC >= 12 || values.RFC <= 13 ) && emailPersonal.includes('@') && emailContactoEmpresarial.includes('@'))
    }
    useEffect(() => {

        console.log(validarFormularioUsuario(values));
        if(validarFormularioUsuario(values)){
            console.log(validarCampos());
        }
    // eslint-disable-next-line
    }, [values])

    return (
        <>
            { errorForm.error ? <p className='error'>{errorForm.msg}</p> : null }   
            <div className='form-alta registro'>
                <InputGroup 
                    texto='Grupo Empresarial'
                    name='grupoEmpresarial' 
                    value={ grupoEmpresarial }
                    accion={ handleInputChange } 
                />
                
                <InputGroup 
                    name='razonSocial' 
                    value={ razonSocial }
                    accion={ handleInputChange }
                    texto='Razón Social'
                />

                <div 
                    className='group-form'
                >
                    <InputGroup 
                        name='RFC' 
                        value={ RFC }
                        accion={ handleInputChange } 
                        texto='RFC'
                    />
                    <SelectGroup 
                        name='perfíles' 
                        value={ perfíles }
                        accion={ handleInputChange } 
                        texto='Perfíl' 
                        opciones={ ['Cliente','Proveedor'] 
                    }/>
                </div>
                <InputGroup 
                    name='nombreContactoEmpresarial' 
                    value={ nombreContactoEmpresarial }
                    accion={ handleInputChange } 
                    texto='Nombre de Contacto Empresarial'
                />
                <InputGroup 
                    name='emailContactoEmpresarial' 
                    value={ emailContactoEmpresarial }
                    accion={ handleInputChange } 
                    texto='Email de Contacto Empresarial'
                />
                <InputGroup 
                    name='CIEC' 
                    value={ CIEC }
                    accion={ handleInputChange } 
                    texto='CIEC'
                />
                <InputGroup 
                    name='FIEL' 
                    value={ FIEL }
                    accion={ handleInputChange } 
                    texto='FIEL'
                />
                <InputGroup 
                    name='emailPersonal' 
                    value={ emailPersonal }
                    accion={ handleInputChange } 
                    texto='Email Personal'
                />
                <InputGroup 
                    name='nombre' 
                    value={ nombre }
                    accion={ handleInputChange } 
                    texto='Nombre'
                />
                <InputGroup 
                    name='password' 
                    value={ password }
                    accion={ handleInputChange } 
                    texto='Contraseña'
                />
                <InputGroup 
                    name='relacionComercial' 
                    value={ relacionComercia }
                    accion={ handleInputChange } 
                    texto='Relación Comercial'
                />
            </div>
            <ListaModulos />  
            <button className='modulo-guardar'>Registrar</button>          
        </>
        
    )
}
