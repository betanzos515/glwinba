import { types } from '../types/types'; 
import { usuariosDemo } from '../helpers/dataUsuario';

const peticionLogin = ( usuario, password )=>{
    return new Promise((resolve =>{
        setTimeout(()=>{
            const resultado = usuariosDemo.some( users => users.usuario === usuario && users.password === password ); 
            resolve(resultado);
        },1500);
    }))
}


export const iniciarLogin = () =>{
    return {
        type: types.iniciarLogin
    }
}
export const terminoLogin = () =>{
    return{
        type: types.terminarLogin
    }
}

export const cerrarSesion = ()=>{
    return{
        type: types.logout
    }
}

export const autenticarUsuario = async ( usuario, password )=>{
    return await peticionLogin( usuario, password );
}


