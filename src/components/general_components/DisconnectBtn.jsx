import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { LOG_OUT } from "../../redux/features/user_data/userSlice";
import { ButtonLogoutStyle } from "../style/homeStyle";

const DisconnectBtn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    return (
        <ButtonLogoutStyle onClick={() => { dispatch(LOG_OUT()); navigate('/') }}>Log out</ButtonLogoutStyle>
    )
}

export default DisconnectBtn