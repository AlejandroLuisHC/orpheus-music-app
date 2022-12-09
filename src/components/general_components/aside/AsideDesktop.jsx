import { IoMdHome, IoMdSearch, IoMdHeart, IoMdPeople, IoMdCheckbox, IoMdMusicalNotes } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { LOG_OUT } from '../../../redux/features/user_data/userSlice'
import { AsideDesktopStyle, LinkAside, Hr } from '../../style/generalStyle'
import { ButtonLogoutStyle } from '../../style/homeStyle'
import AsideProfile from './AsideProfile'
import AsideRecentPlaylist from './AsideRecentPlaylist'

const AsideDesktop = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            <ButtonLogoutStyle onClick={() => {dispatch(LOG_OUT()); navigate('/')}}>Disconnect</ButtonLogoutStyle>
        </AsideDesktopStyle>
    )
}

export default AsideDesktop