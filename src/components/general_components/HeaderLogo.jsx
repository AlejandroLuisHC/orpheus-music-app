import { memo } from 'react'
import { Link } from 'react-router-dom'
import { ImgLogoHome } from '../style/landingStyle'

const HeaderLogo = () => {
    return (
        <Link to='/home'><ImgLogoHome src="https://res.cloudinary.com/drghk9p6q/image/upload/v1671239637/Final-Project-MERN/Logo/Logotipo_tzolje.webp" alt="Logo" /></Link>
    )
}

export default memo(HeaderLogo)