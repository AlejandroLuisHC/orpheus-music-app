import logo from '../assets/img/Logotipo.png'
import { ButtonLogin, DivLanding, FooterLanding, ImgLogoLanding, PSlogan} from "../components/style/landingStyle"
import { FaAngleDoubleUp } from "react-icons/fa"
import { useState } from "react"
import { ImgLogoM } from "../components/style/generalStyle";
import Login from "../components/landing/Login"
import LoginDesktop from '../components/landing/LoginDesktop';


const Landing = () => {
    const [loginView, setLoginView] = useState(false)
    console.log(window.innerWidth);
    return (
        <>
            {window.innerWidth < 768 
                ?
                loginView ? <Login setOut={ setLoginView } /> :
                    <DivLanding>
                        <ImgLogoLanding src={logo} alt="Logo" />
                        <PSlogan>The music that unites us</PSlogan>
                        <ButtonLogin onClick={() => setLoginView(prev => prev = true)}><FaAngleDoubleUp /></ButtonLogin>
                        <FooterLanding><small>This is footer information</small></FooterLanding>
                    </DivLanding>
                :
                <DivLanding>
                    <ImgLogoLanding src={logo} alt="Logo" />
                    <PSlogan>The music that unites us</PSlogan>
                    <div style={{gridRow: 3 }}>
                        <LoginDesktop />
                    </div>
                    <FooterLanding><small>This is footer information</small></FooterLanding>
                </DivLanding>
            }
        </>
    )
}

export default Landing