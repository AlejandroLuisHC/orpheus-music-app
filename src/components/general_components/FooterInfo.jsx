import { Link } from 'react-router-dom'
import {DivFooter, LinkAside, LinkPrimaryStyle} from '../style/generalStyle'
import { ImgLogoHome } from '../style/landingStyle'
const FooterInfo = () => {
    return (
        <DivFooter>
            <LinkPrimaryStyle to='/home'><ImgLogoHome src="https://res.cloudinary.com/drghk9p6q/image/upload/v1671239637/Final-Project-MERN/Logo/Logotipo_tzolje.webp" alt="Logo" /></LinkPrimaryStyle>
            <LinkPrimaryStyle to='/policy'>Privacy Policy of Orpheus</LinkPrimaryStyle>
        </DivFooter>
    )
}

export default FooterInfo