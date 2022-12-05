import { Link, Outlet } from "react-router-dom"
import logo from '../assets/img/Imagotipo.png'
import { BackgroundBubble, DivLanding, ImgLogoLanding, LinkToLogin } from "../components/style/landingStyle"
import { FaAngleDoubleUp } from "react-icons/fa"
import { useState } from "react"
import Login from "../components/landing/Login"


const Landing = () => {
    const [loginView, setLoginView] = useState(false)
    
    return (
        <>
           
                {loginView ? <Login/> :
                    <DivLanding>
                        
                            <ImgLogoLanding src={logo} alt="Logo" />
                            <p>Orpheus... the music that unites us</p>
                        
                        <LinkToLogin onClick={()=>setLoginView(true)}><FaAngleDoubleUp /></LinkToLogin>
                    </DivLanding>
                }
          
        </>
    )
}

export default Landing