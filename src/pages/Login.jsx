import { Link, Outlet } from "react-router-dom"
import logo from '../assets/img/LOGO.png'
import { ButtonPrimaryStyle, InputStyle } from "../components/style/generalStyle"
import { DivLanding, DivLoging, ImgLogoLanding } from "../components/style/landingStyle"
import { FaAngleDoubleUp } from "react-icons/fa"

const Login = () => {
    return (
        <DivLanding>
            <ImgLogoLanding src={logo} alt="Logo" />
            <InputStyle></InputStyle>
        </DivLanding>
    )
}
export default Longin
