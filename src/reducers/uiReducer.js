import { types } from "../types/types";
const initialState = {
    cargando: false,
    error:false,
    mensaje:''
}

export const uiReducer = ( state = initialState, action )=>{
    switch(action.type){
        case types.establecerError : 
            return {
                ...state,
                error: true,
                mensaje:action.payload.mensaje
            }
        case types.removerError:
            return initialState
        default:
            return state
    }
}