import uuid from "react-uuid"
import { types } from "../types/types"


export const agregarModulo = () =>{
    return{
        type: types.establecerModulo,
        payload: {   
            uuid:uuid(),
            nombre:'',
            permisos:[],
            isSubmodulos: false,
            listaSubmodulo:[]
        }   
    }
} 

export const registroInfoUsuario = info =>{
    return{
        type: types.registroInfoUsuario,
        payload: info
    }
}