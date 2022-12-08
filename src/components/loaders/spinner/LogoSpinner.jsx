import logoSpinner from '../../../assets/img/loader/logoLoader.webp'
import { DivMainSpinnerStyle, ImgLogoM } from '../../style/generalStyle'
const LogoSpinner = () => {
    return (
        <DivMainSpinnerStyle>
            <ImgLogoM src={logoSpinner} alt="Loading..." />
        </DivMainSpinnerStyle>
    )
}

export default LogoSpinner