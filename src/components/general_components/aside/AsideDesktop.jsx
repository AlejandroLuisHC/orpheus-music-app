import { useEffect, useState } from 'react'
import {
    IoMdHome,
    IoMdSearch,
    IoMdPeople,
    IoMdCheckbox,
    IoMdMusicalNotes,
    IoMdHeart
} from 'react-icons/io'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
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
    const initState = {
        homeActive: '#D9D9D9',
        searchActive: '#D9D9D9',
        playlistActive: '#D9D9D9',
        tracksActive: '#D9D9D9',
        socialActive: '#D9D9D9',
        eventsActive: '#D9D9D9'
    }
    const [activeTab, setActiveTab] = useState(initState)
    const { pathname } = useLocation();

    useEffect(() => {
        switch (pathname) {
            case "/home":
                setActiveTab(prev => prev = {
                    ...initState,
                    homeActive: '#F1CB58'
                })
                break;

            case "/search":
                setActiveTab(prev => prev = {
                    ...initState,
                    searchActive: '#F1CB58'
                })
                break;

            case "/playlists":
                setActiveTab(prev => prev = {
                    ...initState,
                    playlistActive: '#F1CB58'
                })
                break;

            case "/users":
                setActiveTab(prev => prev = {
                    ...initState,
                    socialActive: '#F1CB58'
                })
                break;

            case "/favtracks":
                setActiveTab(prev => prev = {
                    ...initState,
                    eventsActive: '#F1CB58'
                })
                break;

            case "/events":
                setActiveTab(prev => prev = {
                    ...initState,
                    eventsActive: '#F1CB58'
                })
                break;

            default:
                setActiveTab(prev => prev = {
                    ...initState,
                })
                break;
        }
    }, [pathname])

    return (
        <AsideDesktopStyle>
            <div>
                <LinkAside to={'/home'}
                    active={activeTab.homeActive}
                >
                    <IoMdHome />
                    <PMenuStyle>Home</PMenuStyle>
                </LinkAside>
                <LinkAside to={'/search'}
                    active={activeTab.searchActive}
                >
                    <IoMdSearch />
                    <PMenuStyle>Search</PMenuStyle>
                </LinkAside>
                <LinkAside to={username}
                    active={activeTab.playlistActive}
                >
                    <IoMdMusicalNotes />
                    <PMenuStyle>My playlists</PMenuStyle>
                </LinkAside>
                <LinkAside to={username}
                    active={activeTab.tracksActive}
                >
                    <IoMdHeart />
                    <PMenuStyle>Favorites</PMenuStyle>
                </LinkAside>
                <LinkAside to={'/users'}
                    active={activeTab.socialActive}
                >
                    <IoMdPeople />
                    <PMenuStyle>Social</PMenuStyle>
                </LinkAside>
                <LinkAside to={'/events'}
                    active={activeTab.eventsActive}
                >
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