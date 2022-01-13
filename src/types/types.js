export const types = {

    //acciones login
    login: '[ Auth ] Login ',
    logout: '[ Auth ] Logout',
    iniciarLogin: '[ Auth ] iniciaLogin ',
    terminarLogin : '[ Auth ] terminoLogin',

    //acciones login-usuario
    asignarUsuario:'[ USER ] asignarUsuario',
    asignarRoles: '[ USER ] asignarRoles',
    asignarPerfil : '[ USER ] asignarPerfiles',
    asignarModulos: '[ USER ] asignarModulos',
    removerUsuario : '[ USER ] removerUsuario',

    //acciones UI
    establecerError: '[ UI ] establecerError',
    removerError: '[ UI ] removerError',

    //acciones registroUsuario.
    registroInfoUsuario: '[ registroUsuario ] registroInfoUsuario ',
    finalizarRegistro: '[ registroUsuario  ] finalizarRegistro',
    asignarErrorRegistro:'[ registroUsuario ] asignarErrorRegistro',
    eliminarErrorRegistro : '[ registroUsuario ] eliminarErrorRegistro',
    cargarUsuario: '[ registroUsuario ] registroUsuario',
    asignarUsuarioRegistro: '[ registroUsuario ] asignarUsuarioRegistro',
    establecerModulo: '[ registroUsuario ] establecerModulo',
    eliminarModulo: '[ registroUsuario ] eliminarModulo',
    establecerSubModulo : '[ registroUsuario ] establecerSubmodulo',
    establecerDocumento : '[ registroUsuario ] establecerDocumento',

    establecerInfoModulo: '[ registroUsuario ] establecerInfoModulo',
    
    agregarSubModulo:'[ registroUsuario ] agregarSubmoludo',
    agregarDocumento: '[ registroUsuario ] agregarDocumento',
    establecerPermisosModulo: '[ registroUsuario ] establecerPermisoModulo',
    establecerPermisosSubmodulo:'[ registroUsuario ] establecerPermisoSubmodulo',
    establecerPermisosDocumento:'[ registroUsuario ] establecerPermisoDocumento',

    //moduloActual
    setNombreModuloActual : '[ ModuloActual ] setInfoModuloActual',
    setPermisosModuloActual: '[ ModuloActual ] setPermisosModuloActual',
    setIsSubModulodModuloActual: '[ ModuloActual ] setIsSubModulodModuloActual',
    setListaSubmodulosModuloActual: '[ ModuloActual ] setListaSubmodulosModuloActual'

} 