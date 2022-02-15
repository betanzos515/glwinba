import { Titulo } from "../../UI/Titulo"
import { Routes, Route } from "react-router"
import { Navegacion } from "./componentes/Navegacion"
import { Header } from "../../UI/Header";
import { Tablero } from "./tablero/Tablero";
import { SelecNav } from '../ServiciosEspecializados/componentes/SelecNav'
import { Carga } from "./componentes/Carga";


export const Servicios = () => {
    return (
        <div className='servicios-especializados'>
            <Header />
            <Titulo texto='Servicios Especializados' />
            <Navegacion />
            <SelecNav />
            <div className='container-servicios'>
                <Routes>
                    <Route path='/dueDiligence' element={ <Tablero data='dueDiligence'/> } /> 
                    <Route path='/registroControl' element={ <Tablero data='registro y control'/> } /> 
                    <Route path='/entregable' element={ <Tablero data='Entregable'/> } />
                    <Route path='/' element={ <Tablero /> } />
                </Routes>
            </div>
        </div>
    )
}
