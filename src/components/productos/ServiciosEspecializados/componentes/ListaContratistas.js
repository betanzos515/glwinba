import { useState } from 'react';
import '../../../../styles/ServiciosEspecializados/Tablero/listaContratista.css';
import { Contratista } from './Contratista';

export const ListaContratistas = () => {
    
    const contratistas = [
        {
            nombre: 'Contratista 01',
            uuid : '1233123asd413',
            estatus: 'incompleto'
        },
        {
            nombre: 'Contratista 02',
            uuid : '1233123asd4dfs13',
            estatus:'completo'
        },
        {
            nombre: 'Contratista 03',
            uuid : '12423425xc63',
            estatus:'completo'
        },
        {
            nombre: 'Contratista 04',
            uuid : '1287554523853',
            estatus:'completo'
        },
        {
            nombre: 'Contratista 05',
            uuid : '128755sdb4853',
            estatus:'incompleto'
        },
        {
            nombre: 'Contratista 06',
            uuid : '1287554zxv853',
            estatus:'incompleto'
        },
        {
            nombre: 'Contratista 07',
            uuid : '1287554xcvb853',
            estatus:'completo'
        }
    ]

    const [clientes, setClientes] = useState(contratistas);

    const handleChange = e =>{
        let listaContratistas = [];
        listaContratistas = contratistas.filter(item => item.nombre.includes(e.target.value) || item.estatus.includes(e.target.value))
        setClientes(listaContratistas);
    }

    return (
        <div className='lista-contratistas'>
            <div className='header-contratistas'>Contratistas</div>
            <div className='filtro'>
                <input 
                    type='text' 
                    placeholder='Filtrar por nombre o estatus'
                    onChange={handleChange}
                />
                <i className="fas fa-search"></i>
            </div>
            <div className='lista'>
                <ul>
                    
                    {
                        clientes.map(contratista=>(
                            <Contratista key={contratista.uuid} data={contratista}/>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
