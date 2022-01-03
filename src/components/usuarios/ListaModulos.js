import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { agregarModulo } from "../../actions/registrarUsuario";
import { Modulo } from './Modulo';

export const ListaModulos = () =>{
    
    const dispatch = useDispatch();
    
    const { modulos : ListaModulos } = useSelector(state => state.registroUsuario);
    const[cargaModulo, setCargaModulo] = useState(false)
    const handleClick = () =>{
        dispatch(agregarModulo());
        setCargaModulo(true)           
    };

    useEffect(() => {
        if(ListaModulos.length === 0){
            setCargaModulo(false);
        }
    }, [ListaModulos])

    const boton = <button 
                    className='btnAgregarModulo modulo-guardar' 
                    onClick={ handleClick }
                  >Agregar</button>;

    return (
        <div className='form-alta registro'>
            <h1 className='lista-modulos'>Modulos</h1>
            { !cargaModulo ? ( boton ) : null }
            { cargaModulo ? (
                ListaModulos.map( modulo => (
                    <Modulo key={ modulo.uuid } id={ modulo.uuid } />
                ))
            ) : ''
            }
        </div>
    )
}
