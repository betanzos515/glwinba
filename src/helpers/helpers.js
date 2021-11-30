
export const mensajeSucces = msg =>{
    return {
        msg,
        tipo:'error',
        icono: 'fas fa-ban'
    }
}

export const mensajeError = msg =>{
    return {
        msg,
        tipo:'succes',
        icono: 'far fa-check-circle'
    }
}