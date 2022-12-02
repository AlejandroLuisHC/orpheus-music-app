import { Outlet } from 'react-router-dom'
import { Aside, Footer, GridStyle, Header, Main } from '../components/style/generalStyle'

const Layout = () => {
    const isLogged = false;
    
    return (
        <GridStyle>
            {isLogged && <Header>I'm a header</Header>}
            {isLogged && <Aside>This is the aside</Aside>}
            <Main>
                <Outlet />
            </Main>
            {!isLogged && <Footer>I'm a footer</Footer>}
        </GridStyle>
    )
}

export default Layout