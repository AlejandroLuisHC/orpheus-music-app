import Slider from "../components/slider_home/BasicSlider"
import { useSelector } from 'react-redux'
import { HrStyle } from "../components/style/generalStyle"
import { DivHomeStyle, DivButtonsAction, BtnAction,DivHero, DivMobileButtons,DivBoxStyle, H6StyleHero, DivFavAndPlaylist, DivHomeCarousels, H1Welcome } from "../components/style/homeStyle"
import TrackBox from "../components/home/TrackBox"
import AlbumBox from "../components/home/AlbumBox"
import PlaylistBox from "../components/home/PlaylistBox"

const Home = () => {
    const { username } = useSelector (state => state.userData.user.userData)
    const date = new Date();
    const hour = date.getHours();
    const welcome = hour > 19 && hour < 6
                        ? "Good evening, "
                        : hour > 5 && hour < 13
                            ? "Good morning, "
                            : "Good afternoon, "
    return (
        <DivHomeStyle>
            <DivHero>
                <Slider/>
            </DivHero>
            
            <H1Welcome>{`${welcome}${username}!`}</H1Welcome>

            <HrStyle/>

            <DivMobileButtons>
                <DivButtonsAction>
                    <BtnAction>Playlist</BtnAction>
                    <BtnAction>Events</BtnAction>
                </DivButtonsAction>
                <DivButtonsAction>
                    <BtnAction>Social</BtnAction>
                    <BtnAction>New Releases</BtnAction>
                </DivButtonsAction>
            </DivMobileButtons>
            
            <DivFavAndPlaylist>
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
            </DivFavAndPlaylist>

                    <DivHomeCarousels>
                        <PlaylistBox/>
                        <AlbumBox/>
                        <TrackBox/>
                    </DivHomeCarousels>
                    
            </DivHomeStyle>                                               
        </>
    )
}

export default Home