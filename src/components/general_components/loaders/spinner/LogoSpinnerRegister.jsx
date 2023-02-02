import logoSpinner from '../.././../../assets/img/loader/logoLoader.webp'
import { DivMainSpinnerStyle, ImgLogoL } from '../../../style/generalStyle'
import { Pstyle } from '../../../style/playlistStyle'

const LogoSpinnerRegister = () => {
    return (
        <DivMainSpinnerStyle>
            <ImgLogoL src={logoSpinner} alt="Loading..." />
            <Pstyle>Hold the beat! Your registration is being orchestrated.</Pstyle>
        </DivMainSpinnerStyle>
    )
}

export default LogoSpinnerRegister