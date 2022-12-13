import { useSelector } from 'react-redux'
import { HrStyle } from "../components/style/generalStyle"
import { DivHomeStyle, DivButtonsAction, BtnAction,DivHero, DivMobileButtons,DivBoxStyle, H6StyleHero, DivFavAndPlaylist, DivHomeCarousels, H1Welcome, ImgAvatarProfile } from "../components/style/homeStyle"
import TrackBox from "../components/home/TrackBox"
import AlbumBox from "../components/home/AlbumBox"
import PlaylistBox from "../components/home/PlaylistBox"
import Hero from '../components/home/hero/Hero'
import AsideProfile from '../components/general_components/aside/AsideProfile'
import AvatarImg from '../components/general_components/AvatarImg'

const Home = () => {
    const userData = useSelector(state => state.userData.user.userData)
    const date = new Date();
    const hour = date.getHours();
    console.log(hour);
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
                <ImgAvatarProfile src={userData.avatar} alt="" />
            </H1Welcome>

            <HrStyle/>

{/* Only seen in mobile */}
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
{/* Only seen in mobile */}

{/* View in Desktop */}
            <DivHomeCarousels>
                <PlaylistBox/>
                <AlbumBox/>
                <TrackBox/>
            </DivHomeCarousels>
{/* View in Desktop */}
        </DivHomeStyle>                                               

    )
}

export default Home