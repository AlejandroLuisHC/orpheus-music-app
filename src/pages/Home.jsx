import Slider from "../components/slider_home/BasicSlider"
import { useSelector } from 'react-redux'
import { H2Style, HrStyle } from "../components/style/generalStyle"
import { DivButtonsAction, BtnAction,DivHero, DivMobileButtons, DivHomeStyle, } from "../components/style/homeStyle"
import TrackBox from "../components/home/TrackBox"
const Home = () => {
    const {username} = useSelector (state => state.userData.user.userData)
    return (
        <>  
            <div style={{width:"95vw"}}>
            <DivHero>
                <Slider/>
            </DivHero>
            
            <DivHomeStyle>
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

                <div style={{margin:"20px 0 100px"}}>
                    <H2Style>Playlist</H2Style>
                </div>

                <div style={{margin:"20px 0 100px"}}>
                    <H2Style>Events</H2Style>
                </div>

                <div style={{margin:"20px 0 100px"}}>
                    <H2Style>Albums</H2Style>
                </div>


                <div style={{margin:"20px 0 100px"}}>
                    <div>
                    <H2Style>Tracks</H2Style>
                    arrowleft
                    arrowright
                    </div>
                    
                    <TrackBox/>
                </div>
            </DivHomeStyle>
            </div>
            
        </>
    )
}

export default Home