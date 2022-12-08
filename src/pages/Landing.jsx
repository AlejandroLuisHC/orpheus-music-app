import logo from '../assets/img/Logotipo.png'
import { ButtonLogin, DivLanding, FooterLanding, ImgLogoClick, ImgLogoLanding, PSlogan} from "../components/style/landingStyle"
import { FaAngleDoubleUp } from "react-icons/fa"
import { useState } from "react"
import { ImgLogoM } from "../components/style/generalStyle";
import Login from "../components/landing/Login"
import { useEffect } from 'react';


const Landing = () => {
    const [loginView, setLoginView] = useState(false)
    const [mobile, setMobile] = useState()
    useEffect(() => {
        window.innerWidth > 768 
            ? setMobile(prev => prev = false)
            : setMobile(prev => prev = true)
    }, [window.innerWidth])

    return (
        <>
            {mobile 
                ?
                <DivLanding>
                    <ImgLogoClick onClick={() => setLoginView(prev => prev = false)} src={logo} alt="Logo" />
                    <PSlogan>The music that unites us</PSlogan>
                    {loginView 
                        ? 
                        <div style={{gridRow: 3}}>
                            <Login />
                        </div>
                        :
                        <ButtonLogin onClick={() => setLoginView(prev => prev = true)}><FaAngleDoubleUp /></ButtonLogin>                       
                    }
                    <FooterLanding><small>This is footer information</small></FooterLanding>
                </DivLanding>
                :
                <DivLanding>
                    <ImgLogoLanding src={logo} alt="Logo" />
                    <PSlogan>The music that unites us</PSlogan>
                    <div style={{gridRow: 3}}>
                        <Login />
                    </div>
                    <FooterLanding><small>This is footer information</small></FooterLanding>
                </DivLanding>
            }
        </>
    )
}

export default Landing