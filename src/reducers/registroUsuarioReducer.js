import { types } from "../types/types";
import uuid from "react-uuid";

const registrarUsuario = {
    uuid:'',
    grupoEmpresarial:'',
    razonSocial:'',
    RFC:'',
    perfíles:'',
    nombreContactoEmpresarial:'',
    emailContactoEmpresarial:'',
    CIEC:'',
    FIEL:'',
    emailPersonal:'',
    nombre:'',
    password:'',
    confirmarPassword:'',
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
                confirmarPassword,
                relacionComercial,
            } = action.payload;
            
            return {
                ...state,
                uuid: uuid(),
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
                confirmarPassword,
                relacionComercial,
           }
        case types.establecerModulo : 
            return{
                ...state,
                modulos: [ ...state.modulos, action.payload ]
            }
        case types.eliminarModulo:
            return{
                ...state,
                modulos: state.modulos.filter( modulo => modulo.uuid !== action.payload)
            }
        case types.establecerInfoModulo:
            return{
                ...state,
                modulos: state.modulos.map( item => (item.uuid === action.payload.id) ? action.payload : item )
            }
        default:
            return state;
    }
}