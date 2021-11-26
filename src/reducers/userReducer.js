import { types } from "../types/types"



const initialState = {
    nombre: '',
    empresa:'',
    modulosHabilitados:[],
    autenticado : false,
    roles : ['cliente','proveedor'],
    perfiles: [],
    cargando: false
}

export const userReducer = (state=initialState, action)=>{
    switch(action){
        case types.autenticando:
            return{

            }
        case types.asignarRoles:
            return{

            }
        case types.asignarPerfiles:
            return {

            }
        case types.asignarModulos:
            return{

            }
        default:
            return state
    }
}