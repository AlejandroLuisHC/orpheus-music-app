import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchKey } from '../../api';
import { capitalizeFirstLetter } from '../../helper/utils';
import HomeSlidersLoader from '../general_components/loaders/content_loader/HomeSlidersLoader';
import { DivImgRectangleL, H2Style } from '../style/generalStyle';
import {
    DivFlex,
    DivInfoLists,
    DivPicLists,
    H3NameUser,
    H4NameUser,
    H6StyleHero,
    ImgAvatarUser,
    ImgCards,
    PStyleHero,
    DivContainerSlider,
    DivEventCard,
    DivMusicCard,
    DivSilderHeader,
    DivSliderBody,
    DivUserCard,
} from '../style/homeStyle';

const HomeSlider = ({ apiKey }) => {
  const { data, status } = useQuery([apiKey, apiKey], () => fetchKey(apiKey));

  // if (apiKey === 'users') {
  //     data?.map((item) => console.log(item))
  // }

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
                <Link>View more</Link>
            </DivSilderHeader>

            <DivSliderBody>
                {items()?.map((item) =>
                    apiKey === 'events' ? (
                        <DivEventCard key={item.id}>
                            <DivImgRectangleL src={item.img} />
                            <DivFlex>
                                <div>
                                    <H6StyleHero>{item.name}</H6StyleHero>
                                    <PStyleHero>{item.location} - {item.date}</PStyleHero>
                                </div>
                                <H2Style>{item.price}€</H2Style>
                            </DivFlex>
                        </DivEventCard>

                    ) : apiKey === 'users' ? (
                        <DivUserCard key={item.id}>
                            <ImgAvatarUser src={item.img} />
                            <H3NameUser>{item.name}</H3NameUser>
                            <H4NameUser>{item.followers} followers</H4NameUser>
                        </DivUserCard>

                    ) : (
                        <DivMusicCard
                            resultType={apiKey}
                            key={item.id}
                            /* as={Link} to={`/${apiKey}/${result.name}`} */
                        >
                            <DivPicLists onClick={() =>
                                setPlayer(
                                    (prev) => (prev = {
                                        playerOn: true,
                                        audio: track.file,
                                        name: track.name,
                                        user: track.description,
                                    })
                                )
                            }>
                                <ImgCards src={item.img} />
                            </DivPicLists>
                            <DivInfoLists>
                                <H6StyleHero>{item.name}</H6StyleHero>
                                <PStyleHero>{item.description}</PStyleHero>
                            </DivInfoLists>
                        </DivMusicCard>
                    )
                )}
            </DivSliderBody>
        </DivContainerSlider>
    );

  // <div>
  //   <DivElementTitles>
  //     <H2Style> Albums </H2Style>
  //     <LinkHome>View more</LinkHome>
  //   </DivElementTitles>

  //   <DivSlider>
  //     {data?.map((album) => {
  //       return (
  //         <DivCard key={album.id}>
  //           <DivPicLists>
  //             <ImgCards src={album.img} />
  //           </DivPicLists>
  //           <DivInfoLists>
  //             <H6StyleHero>{album.name}</H6StyleHero>
  //             <PStyleHero>{album.description}</PStyleHero>
  //           </DivInfoLists>
  //         </DivCard>
  //       );
  //     })}
  //   </DivSlider>
  // </div>
};

export default HomeSlider;
