import { useSelector } from 'react-redux';
import { HrStyle, ImgCircleS } from '../components/style/generalStyle';
import {
    MainStyle,
    DivHero,
    NavHomeMobile,
    H1Welcome,
    LinkProfile,
    DivWelcomingHome,
    LinkBtnAction,
} from '../components/style/homeStyle';
import Hero from '../components/home/hero/Hero';
import { DivSliders } from '../components/style/homeStyle';
import HomeSlider from '../components/home/HomeSlider';

const Home = () => {
    const apiKeys = ['tracks', 'albums', 'playlists', 'users', 'events']
    const userData = useSelector((state) => state.userData.user);
    const date = new Date();
    const hour = date.getHours();
    const welcome =
        hour < 6 || hour > 18
            ? 'Good evening, '
            : hour > 5 && hour < 13
                ? 'Good morning, '
                : 'Good afternoon, ';
    return (
        <MainStyle>
            <DivHero>
                <Hero />
            </DivHero>
            <DivWelcomingHome>
                <H1Welcome>{`${welcome}${userData.username}!`}</H1Welcome>
                <LinkProfile to={`/profile/${userData._id}`}>
                    <ImgCircleS src={userData.img.url} alt={userData.username} />
                </LinkProfile>
            </DivWelcomingHome>
            <HrStyle />

            {/* // Only seen mobile  */}
            <NavHomeMobile>
                <LinkBtnAction to="/playlists">Playlist</LinkBtnAction>
                <LinkBtnAction to="/events">Events</LinkBtnAction>
                <LinkBtnAction to="/albums">Albums</LinkBtnAction>
                <LinkBtnAction to="/users">Social</LinkBtnAction>
            </NavHomeMobile>

            <DivSliders>
                {apiKeys.map(key => <HomeSlider key={key} apiKey={key} />)}
            </DivSliders>
        </MainStyle>
    );
};

export default Home;
