import { types } from "../types/types";

export const establecerError = ( mensaje ) =>{
    return{
        type: types.establecerError,
        payload:{
            mensaje
        }
    }
}

export const removerError = ()=>{
    action: types.removerError
}

