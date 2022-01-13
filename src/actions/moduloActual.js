import { types } from "../types/types"

export const setNombreModuloActual = nombre =>{
    return {
            type: types.setNombreModuloActual,
            payload: nombre   
    }
}
export const setPermisosModuloActual = permisos =>{
    return {
        type: types.setPermisosModuloActual,
        payload: permisos
    }
}
export const setIsSubModulodModuloActual = isSubmodulo =>{
    return {
        type: types.setIsSubModulodModuloActual,
        payload: isSubmodulo
    }
}
export const setListaSubmodulosModuloActual = listaSubmodulos =>{
    return {
        type: types.setListaSubmodulosModuloActual,
        payload: listaSubmodulos
    }
}