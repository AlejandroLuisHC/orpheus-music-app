import { useSelector } from 'react-redux'
import { HrStyle } from "../components/style/generalStyle"
import { DivHomeStyle, BtnAction,DivHero, DivMobileButtons, DivHomeCarousels, H1Welcome } from "../components/style/homeStyle"
import TrackBox from "../components/home/TrackBox"
import AlbumBox from "../components/home/AlbumBox"
import PlaylistBox from "../components/home/PlaylistBox"
import Hero from '../components/home/hero/Hero'
import UsersBox from '../components/home/UsersBox'
import EventsBox from '../components/home/EventsBox'

const Home = () => {
    const userData = useSelector(state => state.userData.user.userData)
    const date = new Date();
    const hour = date.getHours();
    const welcome = hour < 6 || hour > 18
                        ? "Good evening, "
                        : hour > 5 && hour < 13
                            ? "Good morning, "
                            : "Good afternoon, "
    return (
        <DivHomeStyle>
            <DivHero>
                <Hero/>
            </DivHero>
            
            <H1Welcome>
                {`${welcome}${userData.username}!`}
            </H1Welcome>

            <HrStyle/>
            
            {/* // Only seen mobile  */}
            <DivMobileButtons>
                <BtnAction>Playlist</BtnAction>
                <BtnAction>Events</BtnAction>
                <BtnAction>Social</BtnAction>
                <BtnAction>New Releases</BtnAction>
            </DivMobileButtons>

            {/* <DivFavAndPlaylist>
                <DivBoxStyle>
                    <div>
                        <img src="src\assets\img\likedsongs.png" alt="" style={{
                        width:"160px"}} />
                        <H6StyleHero>Your Favorite Songs</H6StyleHero>
                    </div> 
                    <div>
                        <img src="src\assets\img\likedsongs.png" alt="" style={{
                        width:"160px"}} />
                        <H6StyleHero>Your last created Playlist</H6StyleHero>
                    </div>
                </DivBoxStyle>
            </DivFavAndPlaylist> */}
            {/* // ...................... */}

            <DivHomeCarousels>
                <EventsBox/>
                <PlaylistBox/>
                <AlbumBox/>
                <TrackBox/>
                <UsersBox/>
            </DivHomeCarousels>
        </DivHomeStyle>                                               

    )
}

export default Home