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
        titulo:'Servicios especializados', 
        bg:colores[0], 
    },
    { 
        id:2, 
        titulo:'Bóveda Fiscal', 
        bg:colores[1], 
    },
    { 
        id:3, 
        titulo:'Bóveda fiscal de materialidad',
        bg:colores[2], 
    },
    { 
        id:4, 
        titulo:'Bóveda fiscal de materialidad cliente', 
        bg:colores[3], 
    },
    { 
        id:5, 
        titulo:'Contablidad electrónica', 
        bg:colores[3], 
    },
    { 
        id:6, 
        titulo:'CCG', 
        bg:colores[2], 
    },
    { 
        id:7, 
        titulo:'DST fiscal nomina', 
        bg:colores[1], 
    },
    { 
        id:8, 
        titulo:'DST fiscal ISR', 
        bg:colores[0], 
    },
    { 
        id:9, 
        titulo:'DST fiscal obligaciones fiscales IVA', 
        bg:colores[0], 
    },
    { 
        id:10, 
        titulo:'DST fiscal comercio exterior', 
        bg:colores[1], 
    },
    { 
        id:11, 
        titulo:'DST fiscal 69B', 
        bg:colores[2], 
    },
    { 
        id:12, 
        titulo:'DST fiscal complemento de pago', 
        bg:colores[3], 
    },
    { 
        id:13, 
        titulo:'DST fiscal PLD', 
        bg:colores[3], 
    },
    { 
        id:14, 
        titulo:'DST fiscal consolidación',
        bg:colores[2], 
    },
    { 
        id:15, 
        titulo:'DST fiscal viáticos', 
        bg:colores[1], 
    },
    { 
        id:16, 
        titulo:'Secretaría corporativa', 
        bg:colores[0], 
    },
    { 
        id:17, 
        titulo:'Recursos humanos', 
        bg:colores[0], 
    },
    { 
        id:18, 
        titulo:'Gestion de ODS', 
        bg:colores[0], 
    }
];

export const rutas = () =>{
    const arregloRutas = [];
    data.map(item => arregloRutas.push({ ruta: `/productos/modulo/${item.titulo}` }));
    return arregloRutas;
}