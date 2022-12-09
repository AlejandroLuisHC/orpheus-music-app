import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import Aside from '../components/general_components/aside/Aside';
import HeaderLogo from '../components/general_components/HeaderLogo';
import { GridStyle, GridLandingStyle, Header, Main, MainLandingStyle } from '../components/style/generalStyle'
const Layout = () => {
    const { isLogged } = useSelector(state => state.userData.user)

    return (
        isLogged 
            ? 
            <GridStyle>
                <Header><HeaderLogo /></Header>
                <Aside />
                <Main>
                    <Outlet />
                </Main>
            </GridStyle>
            :
            <GridLandingStyle>
                <MainLandingStyle>
                    <Outlet />
                </MainLandingStyle>
            </GridLandingStyle>
    )
}

export default Layout