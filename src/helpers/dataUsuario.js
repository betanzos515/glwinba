
/*
    const data = {
        usuario:'',
        nombre,
        id,
        empresa:'',
        rfc,
        modulosHabilitados:[
            {
                id:'',
                permisos:'',
                submodulos:[
                    {
                        id,
                        permisos:[],
                        documentos:[]
                    }
                ],
                documentos:[]
            }
        ],
        roles : ['cliente','proveedor'],
        perfiles: [],
        cargando: false
    }
*/

export const cargaUsuarios = [
    {
        usuario:'pruebaAmbos@prueba.com',
        empresa:'empresaPrueba01',
        modulosHabilitados:[],
        perfiles : ['cliente','proveedor'],
        roles: [],
        token : '',
        cargando: false
    },
    {
        usuario:'prueba@prueba.com',
        empresa:'empresaPrueba02',
        modulosHabilitados:[],
        roles : ['cliente'],
        perfiles: [],
        cargando: false
    },
    {
        usuario:'prueba03@prueba.com',
        empresa:'empresaPrueba03',
        modulosHabilitados:[],
        roles : ['proveedor'],
        perfiles: [],
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