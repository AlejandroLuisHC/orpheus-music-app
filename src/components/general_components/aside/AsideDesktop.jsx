import { IoMdHome, IoMdSearch, IoMdHeart, IoMdPeople, IoMdCheckbox, IoMdMusicalNotes } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { AsideDesktopStyle, LinkAside, Hr } from '../../style/generalStyle'
import AsideProfile from './AsideProfile'
import AsideRecentPlaylist from './AsideRecentPlaylist'

const AsideDesktop = () => {
    const { username } = useSelector(state => state.userData.user.userData)
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
                <LinkAside to={username}>
                    <IoMdMusicalNotes />
                    <p>My playlists</p>
                </LinkAside>
                <LinkAside to={'/profile/favorites'}>
                    <IoMdHeart />
                    <p>Favorites</p>
                </LinkAside>
                <LinkAside to={'/profile/social'}>
                    <IoMdPeople />
                    <p>Social</p>
                </LinkAside>
                <LinkAside to={'/home/events'}>
                    <IoMdCheckbox />
                    <p>Events</p>
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