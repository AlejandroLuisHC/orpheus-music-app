import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <header>I'm a header</header>
            <aside>This is the aside</aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout