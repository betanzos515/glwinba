import { InputGroup } from './InputGroup';
import { Modulo } from './Modulo';
import { SelectGroup } from './SelectGroup';
import './styles/formAlta.css';


export const FormAlta = () => {
    return (
        <>
            <div className='form-alta registro'>
                <InputGroup texto='Grupo Empresarial'/>
                <InputGroup texto='Razón Social'/>
                
                <div className='group-form'>
                    <InputGroup
                     texto='RFC'/>
                    <SelectGroup texto='Perfíl' opciones={['Cliente','Proveedor']}/>
                </div>

                <InputGroup texto='Nombre de Contacto Empresarial'/>
                <InputGroup texto='Email de Contacto Empresarial'/>
                <InputGroup texto='CIEC'/>
                <InputGroup texto='FIEL'/>
                <InputGroup texto='Email Personal'/>
                <InputGroup texto='Nombre'/>
                <InputGroup texto='Contraseña'/>
                <InputGroup texto='Relación Comercial'/>
            </div>

            <Modulo />

        </>
        
    )
}
