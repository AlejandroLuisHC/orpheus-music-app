import { Link } from 'react-router-dom'
import logo from '../../assets/img/Logotipo.png'
import { ImgLogoHome } from '../style/landingStyle'

const HeaderLogo = () => {
    return (
        <Link to='/home'><ImgLogoHome src={logo} alt="Logo" /></Link>
    )
}

export default HeaderLogo