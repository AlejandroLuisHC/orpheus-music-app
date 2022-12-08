import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense} from 'react'
import QueryProvider from "../helper/utils/reactQuery/QueryProvider"
import StoreProvider from "../redux/provider/StoreProvider"
import LogoSpinner from "../components/loaders/spinner/LogoSpinner"

const Layout   = lazy(() => import('./Layout'))
const Home     = lazy(() => import('../pages/Home'))
const Landing  = lazy(() => import('../pages/Landing'))
const Profile  = lazy(() => import('../pages/Profile'))
const Register = lazy(() => import('../pages/Register'))

const Router = () => {
    return (
        <QueryProvider>
        <StoreProvider>
            <BrowserRouter>
                <Suspense fallback={<LogoSpinner />}>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<Landing />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/home' element={<Home />} />
                            <Route path='/search' element={<p>Search</p>} />
                            <Route path='/:username' element={<Profile />}>
                                <Route path='/:username/information' element={<p>Display user info</p>} />
                                <Route path='/:username/work' element={<p>Display user work</p>} />
                                <Route path='/:username/followers' element={<p>Display user followers</p>} />
                                <Route path='/:username/following' element={<p>Display users followed</p>} />
                            </Route> 
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </StoreProvider>
        </QueryProvider>
    )
}

export default Router
