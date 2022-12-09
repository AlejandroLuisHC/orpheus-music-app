import { memo, useEffect, useState } from 'react'
import logo from '../assets/img/Logotipo.png'
import RegisterForm from '../components/register/RegisterForm'
import FooterInfo from '../components/general_components/FooterInfo'
import { DivLanding, FooterLanding, ImgLogoClick, ImgLogoLanding, PSlogan } from '../components/style/landingStyle'

const Register = () => {
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
                <ImgLogoClick src={logo} alt="Logo" />
                <PSlogan>The music that unites us</PSlogan>
                <div style={{gridRow: 3}}>
                    <RegisterForm />
                </div>
                <FooterLanding><FooterInfo /></FooterLanding>
            </DivLanding>
            : 
            <DivLanding>
                <ImgLogoLanding src={logo} alt="Logo" />
                <PSlogan>The music that unites us</PSlogan>
                <div style={{gridRow: 3}}>
                    <RegisterForm />
                </div>
                <FooterLanding><FooterInfo /></FooterLanding>
            </DivLanding>
        )
}

export default memo(Register)