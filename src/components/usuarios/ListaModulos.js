import { useState } from "react";
import { useDispatch } from "react-redux";
import { agregarModulo } from "../../actions/registrarUsuario";


export const ListaModulos = () =>{
    const [ comenzar, setComenzar ] = useState(false);
    const dispatch = useDispatch();
    const handleClick = () =>{
        setComenzar(true);
        dispatch(agregarModulo());            
    }

    const boton = <button className='btnAgregarModulo modulo-guardar' onClick={ handleClick }>Agregar</button>;


    return (
        <div className='form-alta registro'>
            <h1 className='lista-modulos'>Modulos</h1>
            {!comenzar ? (boton) : null }
            { comenzar ? (
                <h1>Comenzando</h1>
            ): ''
            }
        </div>
    )
}
