import { modulos } from "./dataModulos"

/*--------------------------------- Funciones de ayuda mensajes de error ------------------------------- */
export const mensajeError = msg =>{
    return {
        msg,
        tipo:'error',
        icono: 'fas fa-ban'
    }
}

export const mensajeSucces = msg =>{
    return {
        msg,
        tipo:'succes',
        icono: 'far fa-check-circle'
    }
}

/*------------------------------------------------------------------------------------------------------- */


/* ---------------------- Funciones ayuda  en FormRegistro --------------------------------------------------- */

//estado inicial registro usuario
export const initialStateRegistroUsuario = {
    grupoEmpresarial:'',
    razonSocial:'',
    RFC:'',
    perfíles:'',
    nombreContactoEmpresarial:'',
    emailContactoEmpresarial:'',
    CIEC:'Default',
    FIEL:'Default',
    emailPersonal:'',
    nombre:'',
    password:'',
    confirmarPassword:'',
    relacionComercial:''
}

//manejo submitPermisos
export const permisos = [ 
    {   
        nombre:'Crear',
        isChecked: false
    },
    {
        nombre:'Actualizar',
        isChecked: false
    },
    {
        nombre:'Visualizar',
        isChecked: false
    },
    {
        nombre:'Eliminar',
        isChecked: false
    },
    {
        nombre:'Descargar',
        isChecked: false
    }
];

//funcion que valida localmente los valores de los inputs
export const validarFormularioBlur = e =>{

    const elemento = e.target.type;
    const valor = e.target.value;

    switch(elemento){
        case 'text':
            if(!valor.toLowerCase().includes("@") && valor !== ''){
                return {
                    error: true,
                    msg: 'No es un email valido'
                }
            }else{
                return {
                    error: false,
                    msg:''
                };
            }
        case 'password':
            if(valor.length < 8 && valor !== '' ){
                return{
                    error: true,
                    msg: 'Contraseña de mínimo 8 caracteres'
                };
            }else{
                return{
                    error: false,
                    msg:''
                };
            }
    }
}

//valida solo que todos los campos tengan valores
export const validarFormularioUsuario = valores => {
    const keys = Object.keys(valores);
    const validado = keys.map( item => valores[item] === '' );
    return !validado.some(item => item === true);

}

//validacion reglas  de campos, formulario de registro.
export const validarReglas = (...args) =>{
    
    const [ RFC, emailEmpresa, emailPersonal, password, confirmacion ] = args;
    let validacion=null;
    let mensaje= '';

    //validacion rfc
    const comprobacionRFC = /^[ña-z]{3,4}[0-9]{6}[0-9a-z]{3}$/i;
    validacion = comprobacionRFC.test(RFC.trim());
    
    if(!validacion){ mensaje += `\nError ingresa un RFC válido.`; } 

    //validacion emails
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    validacion = ( emailRegex.test( emailEmpresa.trim() ) && emailRegex.test( emailPersonal.trim() )); 
    
    if(!validacion) { mensaje+= '\nError email invalido.'; }

    //validacion contraseñas
    validacion = (password.length >= 8)
    if(!validacion) { mensaje += '\nError en la longitud de la contraseña.' }

    validacion = ( password === confirmacion );
     
    if(!validacion){ mensaje += '\nError las contraseñas no inciden.' }

    if(mensaje.length > 0) { validacion = false; }
    return [ validacion, mensaje ];
}

//función que comprueba si el modulo tiene submodulos.
export const isSubmodulosFunction = ( nombre='' )=> {
    const  resultado = modulos.filter( modulo => modulo.nombre ===nombre )[0];
    return ( resultado ) ? resultado.isSubmodulos : false
}

/* ----------------------------------------------------------------------------------- */

