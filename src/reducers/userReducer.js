import { types } from "../types/types"

const initialState = {
<<<<<<< HEAD
    nombre: '',
    empresa:'',
    modulosHabilitados:[],
    autenticado : false,
    roles : ['proveedor','cliente'],
    perfiles: [],
    cargando: false
=======
    usuario:{
        usuario:'',
        empresa:'',
        modulosHabilitados:[],
        perfiles : [],
        perfil:'',
        roles: [],
        token : '',
        cargando: false
    }
>>>>>>> c67cdedefb3e128a83d0ea19174bf450534aee11
}

export const userReducer = (state=initialState, action)=>{
    switch(action.type){
        case types.asignarUsuario:
            return{
                ...state,
                usuario: action.payload
            }
        case types.removerUsuario:
            return initialState
        case types.asignarPerfil:
            return{
                ...state,
                perfil : action.payload
            }
        default:
            return state
    }
}