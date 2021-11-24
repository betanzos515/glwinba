import { LoginScreen } from '../components/auth/LoginScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PublicRoute } from './PublicRoute';
import { Main } from '../components/UI/Main';
import { PrivateRoute } from './PrivateRoute';

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
                        <Main />
                    </PrivateRoute>
                }/>
            </Routes>
        </BrowserRouter>    
    )
}