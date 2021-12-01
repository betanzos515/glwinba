import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RolesScreen } from '../components/auth/RolesScreen';
import { Servicios } from '../components/productos/Servicios';
import { Main } from '../components/UI/Main';
// import { PublicRoute } from './PublicRoute';

export const SelectRoutes = () => {
    
    const { usuario } = useSelector(state => state.user);
    const { perfiles } = usuario;
    const [ perfilesState, setPerfilesState ] = useState([]);
    console.log(perfilesState);
    useEffect(() => {
        setPerfilesState(perfiles);
    }, [perfiles])
    
    return (
        <div>
            <Routes>
                <Route path='/perfiles' replace element={ <RolesScreen/> }/>
                <Route path='/dashboard' replace element={ <Main/> }/>
                <Route path='/' replace element={ <Main/> }/>
            </Routes>
        </div>
    )
}
