import { types } from '../types/types'; 

const usuariosDemo = [
    {
        usuario: 'prueba@prueba.com',
        password: 'prueba123',
        roles:[]
    },
    {
        usuario: 'pruebaperfiles@prueba.com',
        password: 'prueba123',
        roles:['cliente,proveedor']
    },
    {
        usuario: 'pruebaliente@prueba.com',
        password: 'prueba123',
        roles:['cliente']
    },
    {
        usuario: 'pruebaproveedor@prueba.com',
        password: 'prueba123',
        roles:['provedor']
    }
]

const peticionLogin = ( usuario, password )=>{
    const validacion = usuariosDemo.some( 
        users => users.nombre === usuario && users.password === password );
    if(validacion)
        return{
            action: types.login,
            payload:{
                correo: usuario,
                isLogged: true
            }
        }
    else{
        return {
            action: types.establecerError,
            payload: {
                mensaje:'Usuario no encontrado',
            }
        }
    }
}

const autenticarUsuario = ( usuario, password )=>{
    const resultado = peticionLogin( usario, password );
    return resultado;
}

