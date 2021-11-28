import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RolesScreen } from '../components/auth/RolesScreen';
import { Servicios } from '../components/productos/Servicios';
import { Main } from '../components/UI/Main';

export const SelectRoutes = () => {
    const { roles } = useSelector(state => state.user);
    return (
        <>
            <Routes>
                <Route path='/dashboard' element={ <Main/> }/>
                <Route path='/roles' element={ <RolesScreen/> }/>
                <Route path='/productos/servicios-especializados' element={ <Servicios />} />
            {
                (roles.length >= 2) ?  <Route path='/' element={<Navigate replace to='/roles'/>} />  : <Route path='/' element={<Navigate replace to='/dashboard' />} />
            }       
            </Routes>
        </>

    )
}
