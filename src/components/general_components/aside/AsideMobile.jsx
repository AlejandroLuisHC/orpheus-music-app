import { useState, useEffect } from 'react'
import { IoMdHome, IoMdMusicalNotes, IoMdSearch } from 'react-icons/io'
import { useLocation } from 'react-router-dom'
import { AsideMobileStyle, LinkAside } from '../../style/generalStyle'

const AsideMobile = () => {
    const initState = {
        homeActive: '#D9D9D9',
        searchActive: '#D9D9D9',
        playlistActive: '#D9D9D9',
    }
    const [activeTab, setActiveTab] = useState(initState)
    const { pathname } = useLocation();

    useEffect(() => {
        console.log(pathname)
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
            default:
                setActiveTab(prev => prev = {
                    ...initState,
                })
                break;
        }
    }, [pathname])

    return (
        <AsideMobileStyle>
            <LinkAside to={'/home'}
                active={activeTab.homeActive}
            >
                <IoMdHome />
            </LinkAside>
            <LinkAside to={'/search'}
                active={activeTab.searchActive}
            >
                <IoMdSearch />
            </LinkAside>
            <LinkAside to={'/playlists'}
                active={activeTab.playlistActive}
            >
                <IoMdMusicalNotes />
            </LinkAside>
        </AsideMobileStyle>
    )
}

export default AsideMobile