import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { isLogged } = useSelector((state) => state.userData.user)

    return (
        isLogged ? children : <Navigate to='/' />
    )
}

export default PrivateRoutes