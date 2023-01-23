import { FaAngleDoubleUp } from "react-icons/fa"
import { useEffect, useState, memo } from "react"
import AuthSignUpButton from "../components/landing/AuthSignUpButton";
import FooterInfo from '../components/general_components/FooterInfo';
import useWidth from '../helper/hooks/useWidth'
import { 
    ButtonLogin, 
    DivLanding, 
    FooterLanding, 
    ImgLogoClick, 
    ImgLogoLanding, 
    PSlogan
} from "../components/style/landingStyle"
const Landing = () => {
    const [loginView, setLoginView] = useState(false)
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
                <ImgLogoClick onClick={() => setLoginView(prev => prev = false)} src="https://res.cloudinary.com/drghk9p6q/image/upload/v1671239637/Final-Project-MERN/Logo/Logotipo_tzolje.webp" alt="Logo" />
                <PSlogan>The music that unites us</PSlogan>
                {loginView 
                    ? 
                    <div style={{gridRow: 3}}>
                        <AuthSignUpButton />
                    </div>
                    :
                    <ButtonLogin onClick={() => setLoginView(prev => prev = true)}><FaAngleDoubleUp /></ButtonLogin>                       
                }
                <FooterLanding><FooterInfo /></FooterLanding>
            </DivLanding>
            :
            <DivLanding>
                <ImgLogoLanding src="https://res.cloudinary.com/drghk9p6q/image/upload/v1671239637/Final-Project-MERN/Logo/Logotipo_tzolje.webp" alt="Logo" />
                <PSlogan>The music that unites us</PSlogan>
                <div style={{gridRow: 3}}>
                    <AuthSignUpButton />
                </div>
                <FooterLanding><FooterInfo /></FooterLanding>
            </DivLanding>
    )
}

export default memo(Landing)