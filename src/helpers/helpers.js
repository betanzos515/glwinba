
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
        default: break;
    }
}