import React from 'react'
import logo from '../../assets/img/Logotipo.png'
import { ImgLogoHome } from '../style/landingStyle'

const HeaderLogo = () => {
  return (
    <ImgLogoHome onClick={() => setLoginView(prev => prev = false)} src={logo} alt="Logo" />

  )
}

export default HeaderLogo