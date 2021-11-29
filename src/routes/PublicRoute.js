
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


export const PublicRoute = ({ children }) => {
        const { isLogged } = useSelector(state => state.auth)
        return  isLogged 
                ? <Navigate to='/' />
                : children;             
}
