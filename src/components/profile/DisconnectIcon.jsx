import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { LOG_OUT } from "../../redux/features/user_data/userSlice";
import { ButtonLogoutStyle } from "../style/homeStyle";

const DisconnectIcon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <>
        log Out <IoIosLogOut onClick={() => { dispatch(LOG_OUT()); navigate('/') }} /> 
        </>
    )
}

export default DisconnectIcon