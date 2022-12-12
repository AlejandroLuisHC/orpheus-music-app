import Slider from "../components/slider_home/BasicSlider"
import { useSelector } from 'react-redux'
import { HrStyle } from "../components/style/generalStyle"
import { DivHomeStyle, DivButtonsAction, BtnAction,DivHero, DivMobileButtons,DivBoxStyle, H6StyleHero, DivFavAndPlaylist, DivHomeCarousels } from "../components/style/homeStyle"
import TrackBox from "../components/home/TrackBox"
import AlbumBox from "../components/home/AlbumBox"

const Home = () => {
    const {username} = useSelector (state => state.userData.user.userData)

    return (
        <>  
            <DivHomeStyle>
                <DivHero>
                    <Slider/>
                </DivHero>
                
                    <p>Welcome, {username}!</p>
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
                        <AlbumBox/>
                        <TrackBox/>
                    </DivHomeCarousels>
                    
            </DivHomeStyle>                                               
        </>
    )
}

export default Home