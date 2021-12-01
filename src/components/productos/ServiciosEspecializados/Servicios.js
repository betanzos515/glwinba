import { Titulo } from "../../UI/Titulo"
import { Routes, Route } from "react-router"
import { Navegacion } from "./componentes/Navegacion"
import { Header } from "../../UI/Header";
import { RegistroControl } from "./registro-control/RegistroControl";
import { DueDiligence } from "./due-diligence/DueDiligence";
import { Entregable } from "./entregable/Entregable";


export const Servicios = () => {
    return (
        <div className='servicios-especializados'>
            <Header />
            <Titulo texto='Servicios Especializados' />
            <Navegacion />
            <div>
                <Routes>
                    <Route path='/dueDiligence' element={ <DueDiligence /> } /> 
                    <Route path='/registroControl' element={ <RegistroControl /> } /> 
                    <Route path='/entregable' element={ <Entregable /> } />
                    <Route path='/' element={ <DueDiligence /> } />
                </Routes>
            </div>
        </div>
    )
}
