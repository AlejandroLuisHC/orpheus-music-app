import { useState } from 'react';
import { Outlet } from 'react-router-dom'

import AsideMenu from '../components/general_components/aside/Aside';
import HeaderLogo from '../components/general_components/Header';
import { Aside, Footer, GridStyle, GridLandingStyle, Header, Main, MainLandingStyle } from '../components/style/generalStyle'



const Layout = () => {
    const [logged, setLogged] = useState(sessionStorage.getItem('user') ? true : false)

    return (
        logged 
            ? 
            <GridStyle>
                <Header><HeaderLogo /></Header>
                <AsideMenu />
                <Main>
                    <Outlet context={{setLogged}}/>
                </Main>
            </GridStyle>
            :
            <GridLandingStyle>
                <MainLandingStyle>
                    <Outlet context={{setLogged}}/>
                </MainLandingStyle>
            </GridLandingStyle>
    )
}

export default Layout