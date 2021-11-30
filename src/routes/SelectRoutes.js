import { Route, Routes } from 'react-router-dom';
import { Main } from '../components/UI/Main';

export const SelectRoutes = () => {

    return (
        <div>
            <Routes>
                <Route path='/*' replace element={ <Main/> }/>
            </Routes>
        </div>
    )
}
