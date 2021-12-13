import { types } from "../types/types";
import uuid from "react-uuid";

const registrarUsuario = {
    uuid:null,
    grupoEmpresarial:'',
    razonSocial:'',
    RFC:'',
    Perfíl:'',
    NombreContactoEmpresarial:'',
    emailContactoEmpresarial:'',
    CIEC:'',
    FIEL:'',
    emailPersonal:'',
    Nombre:'',
    Contraseña:'',
    relacionComercial:'',
    modulos: []
}

export const registroUsuarioReducer = ( state = registrarUsuario, action )=>{
    switch(action.type){
        case types.registroInfoUsuario:
            const {
                grupoEmpresarial,
                razonSocial,
                RFC,
                perfíles,
                nombreContactoEmpresarial,
                emailContactoEmpresarial,
                CIEC,
                FIEL,
                emailPersonal,
                nombre,
                password,
                relacionComercial,
            } = action.payload;
            
            return {
                ...state,
                uuid:uuid(),
                grupoEmpresarial,
                razonSocial,
                RFC,
                perfíles,
                nombreContactoEmpresarial,
                emailContactoEmpresarial,
                CIEC,
                FIEL,
                emailPersonal,
                nombre,
                password,
                relacionComercial,
           }
        case types.establecerModulo : 
        return{
            ...state,
            modulos: [ ...state.modulos, action.payload ]
        }
        default:
            return state;
    }
}