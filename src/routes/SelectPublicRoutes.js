import { Route, Routes, Navigate } from 'react-router-dom';
import { LoginScreen } from '../components/auth/LoginScreen';
import { AltaUsuario } from '../components/usuarios/AltaUsuario';

export const SelectPublicRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path='/*' replace element={ <LoginScreen /> }/>
                <Route path="/alta" replace element={ < AltaUsuario/> } />
                <Route path='/login' render={ <Navigate replace to="/login" /> } />
            </Routes>
        </div>
    )
}
