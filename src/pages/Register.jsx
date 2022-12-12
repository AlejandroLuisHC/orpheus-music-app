import { memo, useEffect, useState } from 'react'
import logo from '../assets/img/Logotipo.png'
import RegisterForm from '../components/register/RegisterForm'
import FooterInfo from '../components/general_components/FooterInfo'
import { DivLanding, FooterLanding, ImgLogoClick, ImgLogoLanding, PSlogan } from '../components/style/landingStyle'
import useWidth from '../helper/hooks/useWidth'

const Register = () => {
    const width = useWidth();
    const [windowDesk, setWindowDesk] = useState(width > 768 ? true : false);

    useEffect(() => {
        if(width > 768){
            setWindowDesk(prev => prev = true);
        } else if (width < 768) {
            setWindowDesk(prev => prev = false);
        }
    }, [width])

    return (
        !windowDesk 
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