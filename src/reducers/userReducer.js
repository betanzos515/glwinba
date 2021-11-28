import { types } from "../types/types"

const initialState = {
    nombre: '',
    empresa:'',
    modulosHabilitados:[],
    autenticado : false,
    roles : ['proveedor','cliente'],
    perfiles: [],
    cargando: false
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
        default:
            return state
    }
}