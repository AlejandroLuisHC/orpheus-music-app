import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import { memo } from 'react';
import {
    useNavigate,
    useOutletContext
} from 'react-router-dom';
import { fetchKey } from '../../api';
import { capitalizeFirstLetter } from '../../helper/utils';
import HomeSlidersLoader from '../general_components/loaders/content_loader/HomeSlidersLoader';
import BtnAddToFavTracks from '../general_components/tracks/BtnAddToFavTracks';
import BtnModalTrackOptions from '../general_components/tracks/BtnModalTrackOptions';
import {
    DivImgRectangleL,
    DivInfoMusicBottom,
    H2Style,
    PErrorStyle
} from '../style/generalStyle';
import {
    DivEventInfo,
    DivInfoMusic,
    DivImageMusic,
    PNameUser,
    PFollowersUser,
    PTitle,
    ImgAvatarUser,
    ImgCardMusic,
    PDescription,
    DivEventCard,
    DivMusicCard,
    DivSilderHeader,
    DivSliderBody,
    DivUserCard,
    PEventPrice,
    LinkViewMore,
} from '../style/homeStyle';

const HomeSlider = ({ apiKey }) => {
    const { getAccessTokenSilently } = useAuth0()

    const { data, status } = useQuery([apiKey, apiKey], async () => {
        const token = await getAccessTokenSilently()
        return await fetchKey(apiKey, token)
    });

    const navigate = useNavigate();
    const [setPlayer] = useOutletContext();

    const items = (() => {
        switch (apiKey) {

            case 'users':
                return data?.slice(0).reverse().map((item) => {
                    return (
                        <DivUserCard key={item._id}
                            onClick={() => navigate(`/profile/${item._id}`)}
                        >
                            <ImgAvatarUser src={item.img.url} />
                            <PNameUser>{item.username.length > 12
                                ? item.username.slice(0, 11) + "..."
                                : item.username}</PNameUser>
                            <PFollowersUser>{item.followers.length} followers</PFollowersUser>
                        </DivUserCard>
                    )
                })
            case 'albums':
                return data?.slice(0).reverse().map((item) => {
                    return (
                        <DivMusicCard key={item._id}
                            onClick={() => navigate(`/album/${item._id}`)}
                            resultType={apiKey}
                        >
                            <DivImageMusic>
                                <ImgCardMusic src={item.img.url} />
                            </DivImageMusic>
                            <DivInfoMusic>
                                <PTitle>{item.name}</PTitle>
                                <PDescription>{item.ownership.username}</PDescription>
                            </DivInfoMusic>
                        </DivMusicCard>
                    )
                })
            case 'playlists':
                return data?.slice(0).reverse().map((item) => {
                    return (
                        <DivMusicCard key={item._id}
                            onClick={() => navigate(`/playlist/${item._id}`)}
                            resultType={apiKey}
                        >
                            <DivImageMusic>
                                <ImgCardMusic src={item.img.url} />
                            </DivImageMusic>
                            <DivInfoMusic>
                                <PTitle>{item.name}</PTitle>
                                <PDescription>{item.ownership.username}</PDescription>
                            </DivInfoMusic>
                        </DivMusicCard>
                    )
                })
            case 'tracks':
                return data?.data?.slice(0).reverse().map((item) => {
                    return (
                        <DivMusicCard key={item._id}
                            resultType={apiKey}
                        >
                            <DivImageMusic>
                                <ImgCardMusic
                                    src={item.img.url}
                                    onClick={() => navigate(`/track/${item._id}`)}
                                />
                            </DivImageMusic>
                            <DivInfoMusic>
                                <PTitle>{item.name}</PTitle>
                                <DivInfoMusicBottom>
                                    <PDescription>{item.ownership.username}</PDescription>
                                    <BtnAddToFavTracks trackId={item._id} />
                                    <BtnModalTrackOptions trackId={item._id} />
                                </DivInfoMusicBottom>
                            </DivInfoMusic>
                        </DivMusicCard>
                    )
                })
            case 'events':
                return data?.slice(0).reverse().map((item) => {
                    return (
                        <DivEventCard key={item._id}
                            onClick={() => navigate(`/event/${item._id}`)}
                            resultType={apiKey}
                        >
                            <DivImgRectangleL src={item.img.url} />
                            <DivEventInfo>
                                <div>
                                    <PTitle>{item.name}</PTitle>
                                    <PDescription>{item.location} - {moment(item.date).format('MMMM Do YYYY, h:mm a')}</PDescription>
                                </div>
                                <PEventPrice>{item.price}€</PEventPrice>
                            </DivEventInfo>
                        </DivEventCard>)
                })
            default:
                break
        }
    })

    return (
        status === 'loading'
            ? <HomeSlidersLoader />
            : status === 'error'
                ?
                <>
                    <DivSilderHeader>
                        <H2Style>{capitalizeFirstLetter(apiKey)}</H2Style>
                    </DivSilderHeader>
                    <DivSliderBody>
                        <PErrorStyle>There has been an error fetching these data</PErrorStyle>
                    </DivSliderBody>
                </>
                :
                <>
                    <DivSilderHeader>
                        <H2Style>{capitalizeFirstLetter(apiKey)}</H2Style>
                        <LinkViewMore to={`../${apiKey}`}>View more</LinkViewMore>
                    </DivSilderHeader>

                    <DivSliderBody>
                        {items()}
                    </DivSliderBody>
                </>
    );
};

export default memo(HomeSlider);
