import logo from '../assets/img/Imagotipo.png'
import { ButtonLogin, DivLanding, ImgLogoLanding } from "../components/style/landingStyle"
import { FaAngleDoubleUp } from "react-icons/fa"
import { useState } from "react"
import Login from "../components/landing/Login"

const Landing = () => {
    const [loginView, setLoginView] = useState(false)

    return (
        <>
            {loginView ? <Login /> :
                <DivLanding>
                    <ImgLogoLanding src={logo} alt="Logo" />
                    <p>Orpheus... the music that unites us</p>
                    <ButtonLogin onClick={() => setLoginView(true)}><FaAngleDoubleUp /></ButtonLogin>
                </DivLanding>
            }
        </>
    )
}

export default Landing