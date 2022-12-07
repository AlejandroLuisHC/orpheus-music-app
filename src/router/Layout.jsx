import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import AsideMenu from '../components/general_components/aside/Aside';
import { Aside, Footer, GridStyle, GridLandingStyle, Header, Main, MainLandingStyle } from '../components/style/generalStyle'

const Layout = () => {
    const {isLogged}=useSelector(state => state.userData);
    const [logged, setLogged] = useState(isLogged)
    useEffect(() => {
      setLogged(prev => prev = isLogged)
    }, [isLogged])
    
    console.log(logged);
    return (
        isLogged 
            ? 
            <GridStyle>
                <Header>I'm a header</Header>
                <AsideMenu />
                <Main>
                    <Outlet />
                </Main>
                <Footer>I'm a footer</Footer>
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