import { LoginScreen } from '../components/auth/LoginScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { SelectRoutes } from './SelectRoutes';

export const AppRoute = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={
                    <PublicRoute>
                        <LoginScreen/>
                    </PublicRoute>
                }/>
                <Route path='/*' element={
                    <PrivateRoute>
                        <SelectRoutes />
                    </PrivateRoute>
                }/>
           </Routes>
        </BrowserRouter>    
    )
}