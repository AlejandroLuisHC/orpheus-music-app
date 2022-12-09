import logo from '../assets/img/Logotipo.png'
import { ButtonLogin, DivLanding, FooterLanding, ImgLogoClick, ImgLogoLanding, PSlogan} from "../components/style/landingStyle"
import { FaAngleDoubleUp } from "react-icons/fa"
import { useState, memo } from "react"
import Login from "../components/landing/Login"
import { useEffect } from 'react';
import FooterInfo from '../components/general_components/FooterInfo';

const Landing = () => {
    const [loginView, setLoginView] = useState(false)
    const [mobile, setMobile] = useState()
    useEffect(() => {
        window.innerWidth > 768 
            ? setMobile(prev => prev = false)
            : setMobile(prev => prev = true)
    }, [window.innerWidth])

    return (
        mobile 
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
                <FooterLanding><FooterInfo /></FooterLanding>
            </DivLanding>
            :
            <DivLanding>
                <ImgLogoLanding src={logo} alt="Logo" />
                <PSlogan>The music that unites us</PSlogan>
                <div style={{gridRow: 3}}>
                    <Login />
                </div>
                <FooterLanding><FooterInfo /></FooterLanding>
            </DivLanding>
    )
}

export default memo(Landing)