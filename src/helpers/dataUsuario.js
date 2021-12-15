
export const cargaUsuarios = [
    {
        usuario:'pruebaAmbos@prueba.com',
        empresa:'empresaPrueba01',
        modulosHabilitados:[],
        perfiles : ['cliente','proveedor'],
        perfil:'',
        roles: [],
        token : '',
        cargando: false
    },
    {
        usuario:'prueba@prueba.com',
        empresa:'empresaPrueba02',
        modulosHabilitados:[],
        perfiles : ['cliente'],
        perfil:'cliente',
        roles: [],
        cargando: false
    },
    {
        usuario:'prueba03@prueba.com',
        empresa:'empresaPrueba03',
        modulosHabilitados:[],
        perfiles : ['proveedor'],
        perfil:'proovedor',
        roles: [],
        cargando: false
    }
]

export const usuariosDemo = [
    {
        usuario: 'pruebaAmbos@prueba.com',
        password:'empresaPrueba01',
    },
    {
        usuario: 'prueba@prueba.com',
        password:'empresaPrueba02',
    },
    {
        usuario: 'prueba03@prueba.com',
        password:'empresaPrueba03',
    }
]

export const domyAltaUsuario = {
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
    modulos: [
        {   
            uuid:null,
            nombre:'',
            permisos:[],
            isSubmodulos: false,
            listaSubmodulo:[
                {
                    uuid:null,
                    nombreSubmodulo:'sub01',
                    permisos:[],
                    documentos : [
                        {
                            uui:null,
                            nombre:'documento01',

                        }
                    ]
                }
            ]
        }   
    ]

}