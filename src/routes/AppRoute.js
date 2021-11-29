import { useEffect } from 'react';

import { LoginScreen } from '../components/auth/LoginScreen';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';
import { SelectRoutes } from './SelectRoutes';

import { useSelector, useDispatch } from 'react-redux';
import { types } from '../types/types';


export const AppRoute = () => {
    
    const auth = useSelector(state=> state.auth);
    console.log(auth);
    const dispatch = useDispatch();

    useEffect(()=>{
        const auth = JSON.parse(localStorage.getItem('estadoLoggin'));
        const { isLogged } = auth;
        if(isLogged){
            console.log(`El usuario ah cambiado`);
            dispatch({type:types.login});
        }
    //eslint-disable-next-line
    },[]);
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