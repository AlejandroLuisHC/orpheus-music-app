import { Link } from "react-router-dom"
import logo from '../../assets/img/LOGO.png'
import { DivLogin, ImgLogoLanding, InputsStyleLogin, ButtonStyleLogin } from "../style/loginStyle"
import { IoMdLogIn } from "react-icons/io"

const Login = () => {
    return (
        <DivLogin>
            <ImgLogoLanding src={logo} alt="Logo" />
            <div>
                <InputsStyleLogin type="text" placeholder="Username" />
                <InputsStyleLogin type="password" placeholder="Password" />
                <ButtonStyleLogin>Login<IoMdLogIn/></ButtonStyleLogin>
            </div>
           
        </DivLogin>
    )
}
export default Login
