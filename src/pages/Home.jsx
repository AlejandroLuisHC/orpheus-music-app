import Slider from "../components/slider_home/BasicSlider"
import { H2Style } from "../components/style/generalStyle"
import { DivButtonsAction, BtnAction,DivHero, DivUsernameButtons } from "../components/style/homeStyle"

const Home = () => {
    return (
        <>  
            <DivHero>
                <Slider/>
            </DivHero>
            <DivUsernameButtons>
                <p>Welcome (name)</p>
                <DivButtonsAction>
                    <BtnAction>Playlist</BtnAction>
                    <BtnAction>Events</BtnAction>
                </DivButtonsAction>
                <DivButtonsAction>
                    <BtnAction>Social</BtnAction>
                    <BtnAction>New Releases</BtnAction>
                </DivButtonsAction>
            </DivUsernameButtons>
          
            

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
                <H2Style>Tracks</H2Style>
            </div>
        </>
    )
}

export default Home