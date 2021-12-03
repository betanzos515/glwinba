import { types } from "../types/types"

const initialState = {
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
}

export const userReducer = (state=initialState, action)=>{
    switch(action.type){
        case types.asignarUsuario:
            localStorage.setItem('usuarioActual',JSON.stringify(action.payload));
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