import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregarModulo } from "../../actions/registrarUsuario";
import { Modulo } from './Modulo';


export const ListaModulos = () =>{
    const [ comenzar, setComenzar ] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () =>{
        setComenzar(true);
        dispatch(agregarModulo());            
    }
    const { modulos : ListaModulos } = useSelector(state => state.registroUsuario);
    const { uuid } = ListaModulos
    const boton = <button className='btnAgregarModulo modulo-guardar' onClick={ handleClick }>Agregar</button>;


    return (
        <div className='form-alta registro'>
            <h1 className='lista-modulos'>Modulos</h1>
            {!comenzar ? (boton) : null }
            { comenzar ? (
                ListaModulos.map( modulo => (
                    <Modulo key={ modulo.uuid } id={ modulo.uuid } />    
                ))
            ): ''
            }
        </div>
    )
}
