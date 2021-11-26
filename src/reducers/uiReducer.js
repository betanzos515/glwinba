import { types } from "../types/types";
const initialState = {
    cargando: false,
    error:false,
    mensaje:''
}
export const uiReducer = ( state = initialState, action )=>{
    switch(action){
        case types.establecerError : 
            return {
                ...state,
                error: true,
                mensaje:action.payload.msg
            }
        case types.removerError:
            return{
                ...state,
                error: false,
                mensaje: ''
            }
        default:
            return state
    }
}