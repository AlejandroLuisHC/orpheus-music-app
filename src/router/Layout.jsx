import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'
import Aside from '../components/general_components/aside/Aside';
import HeaderLogo from '../components/general_components/HeaderLogo';
import MusicPlayer from '../components/general_components/music_player/MusicPlayer';
import { GridStyle, GridLandingStyle, Header, Main, MainLandingStyle } from '../components/style/generalStyle'
import useWidth from '../helper/hooks/useWidth';
const Layout = () => {
    const { isLogged } = useSelector(state => state.userData.user)

    const [player, setPlayer] = useState({
        playerOn: false,
        audio: '',
        name: '',
        user: ''
    })
    const width = useWidth();
    const [mobile, setMobile] = useState(width < 768 ? true : false);

    useEffect(() => {
        if (width < 768) {
            setMobile(prev => prev = true);
        } else if (width > 768) {
            setMobile(prev => prev = false);
        }
    }, [width])

    return (
        isLogged
            ?
            <GridStyle>
                <Header><HeaderLogo /></Header>
                <Aside />
                <Main>
                    <Outlet context={[setPlayer]} />
                    {player.playerOn &&
                        <MusicPlayer
                            audio={player.audio}
                            name={player.name}
                            user={player.user}
                            setPlayer={setPlayer}
                            hideVolume={mobile}
                        />
                    }
                </Main>
            </GridStyle>
            :
            <GridLandingStyle>
                <MainLandingStyle>
                    <Outlet />
                </MainLandingStyle>
            </GridLandingStyle>
    )
}

export default Layout