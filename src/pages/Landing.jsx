import logo from '../assets/img/Logotipo.png'
import { ButtonLogin, DivLanding} from "../components/style/landingStyle"
import { FaAngleDoubleUp } from "react-icons/fa"
import { useState } from "react"
import { ImgLogoM } from "../components/style/generalStyle";
import Login from "../components/landing/Login"


const Landing = () => {
    const [loginView, setLoginView] = useState(false)

    return (
        <>
            {loginView ? <Login setOut={setLoginView} /> :
                <DivLanding>
                    <ImgLogoM src={logo} alt="Logo" />
                    <p>Orpheus... the music that unites us</p>
                    <ButtonLogin onClick={() => setLoginView(prev => prev = true)}><FaAngleDoubleUp /></ButtonLogin>
                </DivLanding>
            }
        </>
    )
}

export default Landing