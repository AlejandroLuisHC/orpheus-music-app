import { Link, Outlet } from "react-router-dom"
import logo from '../assets/img/LOGO.png'
import { DivLanding, ImgLogoLanding, LinkToLogin } from "../components/style/landingStyle"
import { FaAngleDoubleUp } from "react-icons/fa"
const Landing = () => {
    return (
        <DivLanding>
            <ImgLogoLanding src={logo} alt="Logo" />
            <p>Orpheus... the music that unites us</p>
            <LinkToLogin to='login'><FaAngleDoubleUp /></LinkToLogin>
        </DivLanding>
    )
}

export default Landing