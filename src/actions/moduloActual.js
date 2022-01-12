import { moduloActual } from "../reducers/moduloActualReducer"
import { types } from "../types/types"

export const asignarModuloActual = ( modulo )=> ({ 
    type: types.asignarModuloActual, 
    payload : moduloActual 
})
