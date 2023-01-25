import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import { memo } from 'react';
import {
    useNavigate,
    useOutletContext
} from 'react-router-dom';
import { fetchKey } from '../../api';
import { capitalizeFirstLetter } from '../../helper/utils';
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

    console.log()

    const items = (() => {
        switch (apiKey) {
            case 'events':
                return data.map((item) => {
                    return (
                        <DivEventCard key={item._id}>
                            <DivImgRectangleL src={item.img.url} />
                            <DivEventInfo>
                                <div>
                                    <PTitle>{item.name}</PTitle>
                                    <PDescription>{item.location} - {item.date}</PDescription>
                                </div>
                                <PEventPrice>{item.price}€</PEventPrice>
                            </DivEventInfo>
                        </DivEventCard>)
                })

            case 'users':
                return data.map((item) => {
                    return (
                        <DivUserCard key={item._id}>
                            <ImgAvatarUser src={item.img.url} />
                            <PNameUser>{item.name}</PNameUser>
                            <PFollowersUser>{item.followers} followers</PFollowersUser>
                        </DivUserCard>)
                })
            case 'albums':
                return data.map((item) => {
                    return (
                        <DivMusicCard key={item._id}
                            resultType={apiKey}
                        /* as={Link} to={`/${apiKey}/${result.name}`} */
                        >
                            <DivImageMusic onClick={() => {

                                setPlayer(
                                    prev => prev = {
                                        playerOn: true,
                                        audio: item.file,
                                        name: item.name,
                                        user: item.description,
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
            case 'playlist':
                return data.map((item) => {
                    return (
                        <DivMusicCard key={item._id}
                            resultType={apiKey}
                        /* as={Link} to={`/${apiKey}/${result.name}`} */
                        >
                            <DivImageMusic onClick={() => {

                                setPlayer(
                                    prev => prev = {
                                        playerOn: true,
                                        audio: item.file,
                                        name: item.name,
                                        user: item.description,
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
            case 'tracks':
                console.log('TRACKS');
                break;
            default:
                console.log('default')
        }
    })


    return (
        status === 'loading'
            ? <HomeSlidersLoader />
            : status === 'error'
                ? <PErrorStyle>An error has occurred fetching this information</PErrorStyle>
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
