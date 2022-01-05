export const colores = [
    "bgVerde",
    "bgNaranja",
    "bgAzul",
    "bgMorado",
    "bgDeshabilitado"
]

export const data = [
    { 
        id:1, 
        nombre:'Servicios especializados',
        bg:colores[0], 
    },
    { 
        id:2, 
        nombre:'Bóveda Fiscal',
        bg:colores[1], 
    },
    { 
        id:3, 
        nombre:'Bóveda materialidad',
        bg:colores[2], 
    },
    { 
        id:4, 
        nombre:'Contablidad electrónica',
        bg:colores[3], 
    },
    { 
        id:5, 
        nombre:'CCG',
        bg:colores[3], 
    },
    { 
        id:6, 
        nombre:'DST fiscal nomina',
        bg:colores[2], 
    },
    { 
        id:7, 
        nombre:'DST fiscal ISR',
        bg:colores[1], 
    },
    { 
        id:8, 
        nombre:'DST fiscal obligaciones fiscales IVA',
        bg:colores[0], 
    },
    { 
        id:9, 
        nombre:'DST fiscal comercio exterior',
        bg:colores[0], 
    },
    { 
        id:10, 
        nombre:'DST fiscal 69B',
        bg:colores[1], 
    },
    { 
        id:11, 
        nombre:'DST fiscal complemento de pago',
        bg:colores[2], 
    },
    { 
        id:12, 
        nombre:'DST fiscal PLD',
        bg:colores[3], 
    },
    { 
        id:13, 
        nombre:'DST fiscal consolidación',
        bg:colores[3], 
    },
    { 
        id:14, 
        nombre:'DST fiscal viáticos',
        bg:colores[2], 
    },
    { 
        id:15, 
        nombre:'Secretaría corporativa',
        bg:colores[1], 
    },
    { 
        id:16, 
        nombre:'Recursos humanos',
        bg:colores[0], 
    },
    { 
        id:17, 
        nombre:'Gestion de ODS',
        bg:colores[0], 
    }
];

export const rutas = () =>{
    const arregloRutas = [];
    data.map(item => arregloRutas.push({ ruta: `/productos/modulo/${item.titulo}` }));
    return arregloRutas;
}