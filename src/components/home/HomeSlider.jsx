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
    const token = getAccessTokenSilently()
    const { data, status } = useQuery([apiKey, [apiKey, token]], () => fetchKey(apiKey, token));
    const navigate = useNavigate();
    const [setPlayer] = useOutletContext();
    const items = () => data?.map((item) =>
        apiKey === 'events'
            ? {
                id: item.id,
                name: item.name,
                img: item.img,
                location: item.location,
                date: item.date,
                price: item.price
            }
            : apiKey === 'users'
                ? {
                    id: item.id,
                    name: item.username,
                    img: item.avatar,
                    followers: item.followers.length
                }
                : item
    );

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
                        {items()?.map((item) =>
                            apiKey === 'events'
                                ?
                                <DivEventCard key={item.id}>
                                    <DivImgRectangleL src={item.img} />
                                    <DivEventInfo>
                                        <div>
                                            <PTitle>{item.name}</PTitle>
                                            <PDescription>{item.location} - {item.date}</PDescription>
                                        </div>
                                        <PEventPrice>{item.price}€</PEventPrice>
                                    </DivEventInfo>
                                </DivEventCard>
                                : apiKey === 'users'
                                    ?
                                    <DivUserCard key={item.id}>
                                        <ImgAvatarUser src={item.img} />
                                        <PNameUser>{item.name}</PNameUser>
                                        <PFollowersUser>{item.followers} followers</PFollowersUser>
                                    </DivUserCard>

                                    :
                                    <DivMusicCard key={item.id}
                                        resultType={apiKey}
                                    /* as={Link} to={`/${apiKey}/${result.name}`} */
                                    >
                                        <DivImageMusic onClick={() => {
                                            console.log(item);
                                            setPlayer(
                                                prev => prev = {
                                                    playerOn: true,
                                                    audio: item.file,
                                                    name: item.name,
                                                    user: item.description,
                                                }
                                            )
                                        }
                                        }>
                                            <ImgCardMusic src={item.img} />
                                        </DivImageMusic>
                                        <DivInfoMusic>
                                            <PTitle>{item.name}</PTitle>
                                            <PDescription>{item.description}</PDescription>
                                        </DivInfoMusic>
                                    </DivMusicCard>

                        )}
                    </DivSliderBody>
                </>
    );
};

export default memo(HomeSlider);
