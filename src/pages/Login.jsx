import { Link, Outlet } from "react-router-dom"
import logo from '../assets/img/LOGO.png'
import { ButtonPrimaryStyle, InputStyle } from "../components/style/generalStyle"
import { DivLanding, DivLoging, ImgLogoLanding } from "../components/style/landingStyle"
import { FaAngleDoubleUp } from "react-icons/fa"
import { LOG_IN } from "../redux/features/user_data/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const payload = { username: 'zeta' }

    const onLogin = () => {
        dispatch(LOG_IN(payload))
        navigate('/home', { replace: true })
    }

    return (
        <DivLanding>
            <ImgLogoLanding src={logo} alt="Logo" />
            <InputStyle></InputStyle>
            <ButtonPrimaryStyle onClick={onLogin}>Next</ButtonPrimaryStyle>
        </DivLanding>
    )
}

export default Login
