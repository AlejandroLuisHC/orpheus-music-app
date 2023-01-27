import logoSpinner from '../.././../../assets/img/loader/logoLoader.webp'
import { DivMainSpinnerStyle, ImgLogoL } from '../../../style/generalStyle'

const LogoSpinner = () => {
    return (
        <DivMainSpinnerStyle>
            <ImgLogoL src={logoSpinner} alt="Loading..." />
        </DivMainSpinnerStyle>
    )
}

export default LogoSpinner