import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchKey } from '../../api';
import { capitalizeFirstLetter } from '../../helper/utils';
import HomeSlidersLoader from '../general_components/loaders/content_loader/HomeSlidersLoader';
import { DivImgRectangleL, H2Style } from '../style/generalStyle';
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
    DivContainerSlider,
    DivEventCard,
    DivMusicCard,
    DivSilderHeader,
    DivSliderBody,
    DivUserCard,
    PEventPrice,
    LinkViewMore,
    
} from '../style/homeStyle';

const HomeSlider = ({ apiKey }) => {
  const { data, status } = useQuery([apiKey, apiKey], () => fetchKey(apiKey));

  const items = () =>
    data?.map((item) =>
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
                name: item.userData.username,
                img: item.userData.avatar,
                followers: item.followers.length
            }
        : {
            id: item.id,
            name: item.name,
            img: item.img,
            description:item.description,
        }
    );

    return status === 'loading' ? (
        <HomeSlidersLoader />
    ) : status === 'error' ? (
        <p>Error</p>
    ) : (
        <DivContainerSlider>
            <DivSilderHeader>
                <H2Style>{capitalizeFirstLetter(apiKey)}</H2Style>
                <LinkViewMore to= {`${apiKey}`} >View more</LinkViewMore>
            </DivSilderHeader>

            <DivSliderBody>
                {items()?.map((item) =>
                    apiKey === 'events' ? (
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

                    ) : apiKey === 'users' ? (
                        <DivUserCard key={item.id}>
                            <ImgAvatarUser src={item.img} />
                            <PNameUser>{item.name}</PNameUser>
                            <PFollowersUser>{item.followers} followers</PFollowersUser>
                        </DivUserCard>

                    ) : (
                        <DivMusicCard
                            resultType={apiKey}
                            key={item.id}
                            /* as={Link} to={`/${apiKey}/${result.name}`} */
                        >
                            <DivImageMusic onClick={() =>
                                setPlayer(
                                    (prev) => (prev = {
                                        playerOn: true,
                                        audio: track.file,
                                        name: track.name,
                                        user: track.description,
                                    })
                                )
                            }>
                                <ImgCardMusic src={item.img} />
                            </DivImageMusic>
                            <DivInfoMusic>
                                <PTitle>{item.name}</PTitle>
                                <PDescription>{item.description}</PDescription>
                            </DivInfoMusic>
                        </DivMusicCard>
                    )
                )}
            </DivSliderBody>
        </DivContainerSlider>
    );
};

export default HomeSlider;
