import { types } from "../types/types";

const initialState = {
    correo:'DEFAUL',
    cargando:false,
    isLogged : true
}
export const authReducer = (state = initialState , action) =>{
    switch( action ){
        case types.login: 
            return{
                ...state,
                correo:action.payload.correo,
                isLogged: action.payload.isLogged
            }
        case types.logout:
            return initialState
        default: 
            return state;
    }
}