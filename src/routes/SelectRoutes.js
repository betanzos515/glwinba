import { Route, Routes } from 'react-router-dom';
import { RolesScreen } from '../components/auth/RolesScreen';
import { Servicios } from '../components/productos/Servicios';
import { Main } from '../components/UI/Main';

export const SelectRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path='/perfiles' replace element={ <RolesScreen/> }/>
                <Route path='/dashboard' replace element={ <Main/> }/>
                <Route path='/productos/servicios-especializados' replace element={ <Servicios/> }/>
                <Route path='/' replace element={ <Main/> }/>
            </Routes>
        </div>
    )
}
