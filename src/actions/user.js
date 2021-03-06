import { cargaUsuarios } from '../helpers/dataUsuario';
import { types } from '../types/types';

export const obtenerUsuario = ( usuario )=>{
    return cargaUsuarios.filter(user=> user.usuario === usuario);
}

export const asignarUsuario = ( usuario ) =>{
    return {
        type: types.asignarUsuario,
        payload: obtenerUsuario(usuario)[0]
    }
}

export const asignarPerfil = ( perfil )=>{
    return{
        type: types.asignarPerfil,
        payload: perfil
    }
}