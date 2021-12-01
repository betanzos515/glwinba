import { Route, Routes } from 'react-router-dom';
import { Servicios } from '../components/productos/ServiciosEspecializados/Servicios';
import { Main } from '../components/UI/Main';


export const SelectRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path='/*' replace element={ <Main/> }/>
                <Route path="/productos/servicios/*" element={ < Servicios/> } />
            </Routes>
        </div>
    )
}
