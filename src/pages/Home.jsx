import { useSelector } from 'react-redux';
import { HrStyle } from '../components/style/generalStyle';
import {
  DivHomeStyle,
  BtnAction,
  DivHero,
  DivMobileButtons,
  DivHomeCarousels,
  H1Welcome,
} from '../components/style/homeStyle';
import TrackBox from '../components/home/TrackBox';
import AlbumBox from '../components/home/AlbumBox';
import PlaylistBox from '../components/home/PlaylistBox';
import Hero from '../components/home/hero/Hero';
import UsersBox from '../components/home/UsersBox';
import EventsBox from '../components/home/EventsBox';
import { DivSliders } from '../components/style/searchStyle';
import SearchSlider from '../components/search/SearchSlider';
import HomeSlider from '../components/home/HomeSlider';

const Home = () => {
  const userData = useSelector((state) => state.userData.user.userData);
  const date = new Date();
  const hour = date.getHours();
  const welcome =
    hour < 6 || hour > 18
      ? 'Good evening, '
      : hour > 5 && hour < 13
      ? 'Good morning, '
      : 'Good afternoon, ';
  return (
    <DivHomeStyle>
      <DivHero>
        <Hero />
      </DivHero>

      <H1Welcome>{`${welcome}${userData.username}!`}</H1Welcome>

      <HrStyle />

      {/* // Only seen mobile  */}
      <DivMobileButtons>
        <BtnAction>Playlist</BtnAction>
        <BtnAction>Events</BtnAction>
        <BtnAction>Social</BtnAction>
        <BtnAction>New Releases</BtnAction>
      </DivMobileButtons>

      {/* <DivHomeCarousels>
                <EventsBox/>
                <PlaylistBox/>
                <AlbumBox/>
                <TrackBox/>
                <UsersBox/>
            </DivHomeCarousels> */}

      <DivSliders>
        <HomeSlider apiKey={'events'} />
        <EventsBox/>
        <HomeSlider apiKey={'playlists'} />
        <HomeSlider apiKey={'albums'} />
        <HomeSlider apiKey={'tracks'} />
        <HomeSlider apiKey={'users'} />
      </DivSliders>
    </DivHomeStyle>
  );
};

export default Home;
