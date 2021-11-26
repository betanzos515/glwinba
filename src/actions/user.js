import { cargaUsuarios } from '../helpers/dataUsuario';
import { types } from '../types/types';

const obtenerUsuario = (usuario)=>{
    return cargaUsuarios.filter(user=> user.usuario === usuario);
}

export const asignarUsuario = ( usuario ) =>{
    return {
        type: types.asignarUsuario,
        payload: obtenerUsuario(usuario)[0]
    }
}