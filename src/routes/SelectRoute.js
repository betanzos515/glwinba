import React from 'react';
import { Routes } from 'react-router';

export const SelectRoute = () => {
    const { isLogged } = useSelector(state => state.state)
    
    return (
        <Routes>
            {isLogged }
        </Routes>
    )
}
