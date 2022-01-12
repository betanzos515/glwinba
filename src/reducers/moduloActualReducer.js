import { types } from "../types/types";

const initialState = {
    nombre:'',
    permisos:[],
    isSubmodulo: false,
    submodulos:[]
}

export const moduloActual = (state = initialState, action)=>{
    switch(action.type){
        case types.asignarModuloActual:
            return{
               ...state,
               nombre:action.payload.nombre,
               permisos: action.payload.permisos,
               isSubmodulo: action.payload.permisos,
               submodulos: action.payload.submodulos
            }
        case types.asignarPermisosModuloActual:
            return{
                ...state,
                permisos: action.payload
            }
        default: 
            return state;
    }
}