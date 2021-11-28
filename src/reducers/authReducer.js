import { types } from "../types/types";

const initialState = {
    cargando:false,
    isLogged :false
}

export const authReducer = (state = initialState , action) =>{
    switch( action.type ){
        case types.iniciarLogin:
            return{
                ...state,
                cargando: true
            }
        case types.terminarLogin:
            return{
                ...state,
                cargando: false
            }
        case types.login: 
            return{
                ...state,
                cargando: false,
                isLogged: action.payload.isLogged
            }
        case types.logout:
            return initialState
        default: 
            return state;
    }
}