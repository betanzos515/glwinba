import { types } from "../types/types";

const initialState = {
    nombre:'',
    permisos:[],
    isSubmodulo: false,
    submodulos:[]
}

export const moduloActual = (state = initialState, action)=>{
    switch(action.type){
        case types.setNombreModuloActual:
            return{
                ...state,
                nombre: action.payload
            }
        case types.setPermisosModuloActual:
            return{
                ...state,
                permisos: action.payload
            }
        case types.setIsSubModulodModuloActual:
            return{
                ...state,
                isSubmodulo: action.payload
            }
        case types.setListaSubmodulosModuloActual:
            return{
                ...state,
                submodulos: action.payload
            }
        default: 
            return state;
    }
}