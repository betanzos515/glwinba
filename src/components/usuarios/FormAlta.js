import { useEffect, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import { InputGroup } from './InputGroup';
import { ListaModulos } from './ListaModulos';
import { SelectGroup } from './SelectGroup';

//funciones de validación
import { initialStateRegistroUsuario, validarFormularioUsuario, validarReglas } from '../../helpers/helpers';

import { useDispatch } from 'react-redux';
import { registroInfoUsuario } from '../../actions/registrarUsuario';


import './styles/formAlta.css';

export const FormAlta = () => {
    
    
    const dispatch = useDispatch();

    const [ errorForm, setErrorForm ] = useState({
        error: false,
        msg:''
    });

    const [ values, handleInputChange ] = useForm(initialStateRegistroUsuario);

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
        confirmarPassword,
        relacionComercial,
    } = values;

    useEffect(() => {
        if(validarFormularioUsuario(values)){
            console.log('Disparada...');
            const resultado = validarReglas( RFC, emailPersonal, emailContactoEmpresarial, password, confirmarPassword );
            const [ validacion, mensaje ] = resultado;
            if ( validacion ){
                setErrorForm({
                    error: false,
                    msg:''
                })
                dispatch(registroInfoUsuario(values));
                console.log('Dispatch lanzado....');
            }else{
                setErrorForm({
                    error: true,
                    msg: mensaje
                })
            }
        }
    // eslint-disable-next-line
    }, [ values ])

    return (
        <>
            { errorForm.error ? <p className='error'>{ errorForm.msg }</p> : null }  
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
                        opciones={ ['Cliente','Proveedor','Cliente-Provedor'] }
                    />
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
                    tipo={ 'password' }
                />
                <InputGroup 
                    name='confirmarPassword' 
                    value={ confirmarPassword }
                    accion={ handleInputChange } 
                    texto='Confirmar Contraseña'
                    tipo={ 'password' }
                />
                <InputGroup 
                    name='relacionComercial' 
                    value={ relacionComercial }
                    accion={ handleInputChange } 
                    texto='Relación Comercial'
                />
            </div>
            <ListaModulos />  
            <button className='modulo-guardar'>Guardar</button>          
        </>
    )
}
