import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment/moment';
import { memo } from 'react';
import {
    Link,
    useNavigate,
    useOutletContext
} from 'react-router-dom';
import { fetchKey } from '../../api';
import { capitalizeFirstLetter } from '../../helper/utils';
import Error from '../../pages/Error';
import HomeSlidersLoader from '../general_components/loaders/content_loader/HomeSlidersLoader';
import {
    DivImgRectangleL,
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
            case 'events':
                return data?.map((item) => {
                    return (
                        <DivEventCard key={item._id}>
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

            case 'users':
                return data?.map((item) => {
                    return (
                        <Link key={item._id} to={`/profile/${item._id}`}>
                            <DivUserCard>
                                <ImgAvatarUser src={item.img.url} />
                                <PNameUser>{item.username}</PNameUser>
                                <PFollowersUser>{item.followers} followers</PFollowersUser>
                            </DivUserCard>
                        </Link>
                    )
                })
            case 'albums':
                return data?.map((item) => {
                    return (
                        <Link key={item._id} to={`/album/${item._id}`}>
                            <DivMusicCard
                                resultType={apiKey}>
                                <DivImageMusic>
                                    <ImgCardMusic src={item.img.url} />
                                </DivImageMusic>
                                <DivInfoMusic>
                                    <PTitle>{item.name}</PTitle>
                                    <PDescription>{item.description}</PDescription>
                                </DivInfoMusic>
                            </DivMusicCard>
                        </Link>
                    )
                })
            case 'playlists':
                return data?.map((item) => {
                    return (
                        <Link key={item._id} to={`/playlist/${item._id}`}>
                            <DivMusicCard resultType={apiKey}>
                                <DivImageMusic>
                                    <ImgCardMusic src={item.img.url} />
                                </DivImageMusic>
                                <DivInfoMusic>
                                    <PTitle>{item.name}</PTitle>
                                    <PDescription>{item.description}</PDescription>
                                </DivInfoMusic>
                            </DivMusicCard>
                        </Link>
                    )
                })
            case 'tracks':
                return data?.data.map((item) => {
                    return (
                        <DivMusicCard key={item._id}
                            resultType={apiKey}

                        >
                            <DivImageMusic onClick={() => {
                                setPlayer(
                                    prev => prev = {
                                        playerOn: true,
                                        audio: item.file.url,
                                        name: item.name,
                                        user: item.ownership.username,
                                    }
                                )
                            }}>
                                <ImgCardMusic src={item.img.url} />
                            </DivImageMusic>
                            <DivInfoMusic>
                                <PTitle>{item.name}</PTitle>
                                <PDescription>{item.description}</PDescription>
                            </DivInfoMusic>
                        </DivMusicCard>)
                })
            default:
                console.log('default')
        }
    })


    return (
        status === 'loading'
            ? <HomeSlidersLoader />
            : status === 'error'
                ? <Error />
                :
                <>
                    <DivSilderHeader>
                        <H2Style onClick={() => navigate(`/home/${apiKey}`)}>{capitalizeFirstLetter(apiKey)}</H2Style>
                        <LinkViewMore to={`/home/${apiKey}`} >View more</LinkViewMore>
                    </DivSilderHeader>

                    <DivSliderBody>
                        {items()}
                    </DivSliderBody>
                </>
    );
};

export default memo(HomeSlider);
