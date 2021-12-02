import React from 'react'
import '../../../../styles/ServiciosEspecializados/SelectNav.css';
const empresaContratante = [
    {
        valor:1,
        nombre: 'Empresa Contratante 01'
    },
    {
        valor:2,
        nombre: 'Empresa Contratante 02'
    },
    {
        valor:3,
        nombre: 'Empresa Contratante 03'
    }
]
let contador = 0;
export const SelecNav = () => {
    return (
        <div className='selectNav'> 
            <select className="select-form" id="empresa-contratante">
                <option value="">Empresa Contratante</option>
                { empresaContratante.map(item =>(
                    <option key={contador++}>Primero</option>
                ))
                }
            </select>

            <select className="select-form" id="mes">
                <option value="">Mes</option>
                <option value="1">Enero</option>
                <option value="2">Febrero</option>
                <option value="3">Marzo</option>
                <option value="4">Abril</option>
                <option value="5">Mayo</option>
                <option value="6">Junio</option>
                <option value="7">Julio</option>
                <option value="8">Agosto</option>
                <option value="9">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Deciembre</option>
            </select>

            <select className="select-form" id="empresa-contratante">
                <option value="">Año</option>
                <option value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
            </select>
        </div>
    )
}
