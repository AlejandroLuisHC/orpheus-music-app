import {
    IoMdHome,
    IoMdSearch,
    IoMdHeart,
    IoMdPeople,
    IoMdCheckbox,
    IoMdMusicalNotes
} from 'react-icons/io'
import { useSelector } from 'react-redux'
import {
    AsideDesktopStyle,
    LinkAside,
    Hr,
    PMenuStyle
} from '../../style/generalStyle'
import AsideProfile from './AsideProfile'
import AsideRecentPlaylist from './AsideRecentPlaylist'

const AsideDesktop = () => {
    const { username } = useSelector(state => state.userData.user)
    return (
        <AsideDesktopStyle>
            <div>
                <LinkAside to={'/home'}>
                    <IoMdHome />
                    <PMenuStyle>Home</PMenuStyle>
                </LinkAside>
                <LinkAside to={'/search'}>
                    <IoMdSearch />
                    <PMenuStyle>Search</PMenuStyle>
                </LinkAside>
                <LinkAside to={username}>
                    <IoMdMusicalNotes />
                    <PMenuStyle>My playlists</PMenuStyle>
                </LinkAside>
                {/* <LinkAside to={username}>
                    <IoMdHeart />
                    <PMenuStyle>Favorites</PMenuStyle>
                </LinkAside> */}
                <LinkAside to={'/home/users'}>
                    <IoMdPeople />
                    <PMenuStyle>Social</PMenuStyle>
                </LinkAside>
                <LinkAside to={'/home/events'}>
                    <IoMdCheckbox />
                    <PMenuStyle>Events</PMenuStyle>
                </LinkAside>
            </div>
            <Hr />
            <div>
                <AsideRecentPlaylist />
            </div>
            <Hr />
            <AsideProfile />
            <Hr />
        </AsideDesktopStyle>
    )
}

export default AsideDesktop