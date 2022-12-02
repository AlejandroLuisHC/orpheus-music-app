import logo from '../assets/img/LOGO.png'
import { InputStyle, ButtonPrimaryStyle } from "../style/generalStyle"
import { DivLanding, ImgLogoLanding } from "../style/landingStyle"
import { IoMdLogIn } from "react-icons/io"

const Login = () => {
    return (
        <DivLanding>
            <ImgLogoLanding src={logo} alt="Logo" />
            <InputStyle type="text" placeholder="Username" />
            <InputStyle type="password" placeholder="Password" />
            <ButtonPrimaryStyle>Login<IoMdLogIn/></ButtonPrimaryStyle>
        </DivLanding>
    )
}
export default Longin
