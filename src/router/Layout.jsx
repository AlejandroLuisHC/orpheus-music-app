import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import AsideMenu from '../components/general_components/Aside';
import { Aside, Footer, GridStyle, GridLandingStyle, Header, Main, MainLandingStyle } from '../components/style/generalStyle'

const Layout = () => {
    const {isLogged}=useSelector(state => state.userData);
    const [logged, setLogged] = useState(isLogged)
    useEffect(() => {
      setLogged(prev => prev = isLogged)
    }, [isLogged])
    
    console.log(logged);
    return (
        <>
        {!isLogged && 
            <GridLandingStyle>
                
                <MainLandingStyle>
                    <Outlet />
                </MainLandingStyle>
                
                <Footer>I'm a footer</Footer>
            </GridLandingStyle>
        }   
        {isLogged && 
            <GridStyle>
            <Header>I'm a header</Header>
            <Aside><AsideMenu /></Aside>
                <Main>
                    <Outlet />
                </Main>
                
                <Footer>I'm a footer</Footer>
            </GridStyle>
        }
        </>    
    )
}

export default Layout