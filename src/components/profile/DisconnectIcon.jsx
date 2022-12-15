import { IoIosLogOut } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { LOG_OUT } from "../../redux/features/user_data/userSlice";
import { ListItem } from "../style/profileStyle";

const DisconnectIcon = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <ListItem onClick={() => { dispatch(LOG_OUT()); navigate('/') }}>
            <span>Log out</span> <IoIosLogOut /> 
        </ListItem>
    )
}

export default DisconnectIcon