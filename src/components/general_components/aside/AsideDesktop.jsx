import { IoMdHome, IoMdSearch, IoMdHeart, IoMdPeople, IoMdCheckbox, IoMdMusicalNotes } from 'react-icons/io'
import { AsideDesktopStyle, LinkAside, Hr } from '../../style/generalStyle'
import DisconnectBtn from '../DisconnectBtn'
import AsideProfile from './AsideProfile'
import AsideRecentPlaylist from './AsideRecentPlaylist'

const AsideDesktop = () => {

    return (
        <AsideDesktopStyle>
            <div>
                <LinkAside to={'/home'}>
                    <IoMdHome />
                    <p>Home</p>
                </LinkAside>
                <LinkAside to={'/search'}>
                    <IoMdSearch />
                    <p>Search</p>
                </LinkAside>
                <LinkAside to={'/library'}>
                    <IoMdMusicalNotes />
                    <p>Your Library</p>
                </LinkAside>
                <LinkAside to={'/profile/favorites'}>
                    <IoMdHeart />
                    <p>Favorites</p>
                </LinkAside>
                <LinkAside to={'/profile/social'}>
                    <IoMdPeople />
                    <p>Social</p>
                </LinkAside>
                <LinkAside to={'/events'}>
                    <IoMdCheckbox />
                    <p>Events</p>
                </LinkAside>
            </div>
            <Hr/>
            <div>
                <AsideRecentPlaylist />
            </div>
            <Hr/>
            <AsideProfile />
            <Hr/>
            <DisconnectBtn />
        </AsideDesktopStyle>
    )
}

export default AsideDesktop