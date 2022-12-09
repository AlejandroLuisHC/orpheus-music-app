import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const NotConnectedRoutes = ({ children }) => {
    const { isLogged } = useSelector((state) => state.userData.user)  

    return (
        isLogged ? <Navigate to='/home' /> : children      
    )        
}

export default NotConnectedRoutes