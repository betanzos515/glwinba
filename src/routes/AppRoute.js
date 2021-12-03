import { useEffect } from 'react';

import { LoginScreen } from '../components/auth/LoginScreen';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { SelectRoutes } from './SelectRoutes';

import { useDispatch } from 'react-redux';
import { types } from '../types/types';


export const AppRoute = () => {

    //eslint-disable-next-line
    const dispatch = useDispatch();

    useEffect(()=>{
        const auth = JSON.parse(localStorage.getItem('estadoLoggin'));
        const usuarioStorage = JSON.parse(localStorage.getItem('usuarioActual'))
        const { isLogged } = auth;
        if(isLogged && usuarioStorage){
            dispatch({type:types.login});
            dispatch({
                type: types.asignarUsuario,
                payload: usuarioStorage
            })
        }
    //eslint-disable-next-line
    },[]);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={
                    <PublicRoute>
                        <LoginScreen />
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