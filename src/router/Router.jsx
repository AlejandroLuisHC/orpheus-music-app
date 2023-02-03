import { BrowserRouter, Routes, Route } from "react-router-dom"
import { lazy, Suspense } from 'react'
import GeneralProvider from "../helper/utils/general_provider/GeneralProvider"
import LogoSpinner from "../components/general_components/loaders/spinner/LogoSpinner"
import PrivateRoutes from "./PrivateRoutes"
import NotConnectedRoutes from "./NotConnectedRoutes"
import Policy from "../pages/Policy"


const Layout = lazy(() => import('./Layout'))
const Landing = lazy(() => import('../pages/Landing'))
const Register = lazy(() => import('../pages/Register'))
const RecoverPassword = lazy(() => import("../pages/RecoverPassword"))

const Home = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/Home"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const Profile = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/Profile"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const ViewMore = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/ViewMore"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const Search = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/Search"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const Playlist = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/Playlist"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const Album = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/Album"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const Track = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/Track"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const WorkInProgress = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/WorkInProgress"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const EventsList = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/EventsList"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const AlbumsList = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/AlbumsList"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const PlaylistList = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/PlaylistList"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const TracksList = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/TracksList"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const Event = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/Event"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const UsersList = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/UsersList"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});
const FavTracksList = lazy(async () => {
    const [moduleExports] = await Promise.all([
        import("../pages/FavTracksList"),
        new Promise(resolve => setTimeout(resolve, 300))
    ])
    return moduleExports
});

const Router = () => {
    return (
        <GeneralProvider>
            <BrowserRouter>
                <Suspense fallback={<LogoSpinner />}>
                    <Routes>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<NotConnectedRoutes><Landing /></NotConnectedRoutes>} />
                            <Route path='/register' element={<NotConnectedRoutes><Register /></NotConnectedRoutes>} />
                            <Route path='/recover-password' element={<NotConnectedRoutes><RecoverPassword /></NotConnectedRoutes>} />
                            <Route path='/home' element={<PrivateRoutes><Home /></PrivateRoutes>} />
                            <Route path='/home/:viewMore' element={<PrivateRoutes><WorkInProgress /></PrivateRoutes>} />
                            <Route path='/search' element={<PrivateRoutes><Search /></PrivateRoutes>} />
                            <Route path='/profile/:id' element={<PrivateRoutes><Profile /></PrivateRoutes>} />
                            <Route path='/playlist/:id' element={<PrivateRoutes><Playlist /></PrivateRoutes>} />
                            <Route path='/album/:id' element={<PrivateRoutes><Album /></PrivateRoutes>} />
                            <Route path='/track/:id' element={<PrivateRoutes><Track /></PrivateRoutes>} />
                            <Route path='/event/:id' element={<PrivateRoutes><Event /></PrivateRoutes>} />
                            <Route path='/events' element={<PrivateRoutes><EventsList /></PrivateRoutes>} />
                            <Route path='/albums' element={<PrivateRoutes><AlbumsList /></PrivateRoutes>} />
                            <Route path='/playlists' element={<PrivateRoutes><PlaylistList /></PrivateRoutes>} />
                            <Route path='/users' element={<PrivateRoutes><UsersList /></PrivateRoutes>} />
                            <Route path='/tracks' element={<PrivateRoutes><TracksList /></PrivateRoutes>} />
                            <Route path='/policy' element={<Policy />} />
                            <Route path='/favouritetracks' element={<PrivateRoutes><FavTracksList /></PrivateRoutes>} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </GeneralProvider>
    )
}

export default Router
