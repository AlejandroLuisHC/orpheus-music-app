import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { LOG_OUT } from "../../redux/features/user_data/userSlice";
import { ListItem } from "../style/profileStyle";
import { useAuth0 } from "@auth0/auth0-react"

const DisconnectIcon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { logout } = useAuth0()

    
    return (
        <ListItem onClick={() => { dispatch(LOG_OUT()); navigate('/'); logout() }}>
            <span>Log out</span> <IoIosLogOut /> 
        </ListItem>
    )
}

export default DisconnectIcon