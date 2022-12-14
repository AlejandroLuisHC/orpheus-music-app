import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchKey } from '../../api';
import { capitalizeFirstLetter } from '../../helper/utils';
import HomeSlidersLoader from '../general_components/loaders/content_loader/HomeSlidersLoader';
import { H2Style } from '../style/generalStyle';
import {
    DivCard,
    DivContainerSlider,
    DivSilderHeader,
    DivSliderBody,
    ImgCard,
} from '../style/searchStyle';

const HomeSlider = ({ apiKey }) => {
    const { data, status } = useQuery([apiKey, apiKey], () => fetchKey(apiKey));

    return (
        status === 'loading' 
            ? <HomeSlidersLoader />
            : status === 'error' 
                ? <p>Error</p>
                : 
                <DivContainerSlider>
                    <DivSilderHeader>
                        <H2Style>{capitalizeFirstLetter(apiKey)}</H2Style>
                        <Link>View more</Link>
                    </DivSilderHeader>

                    <DivSliderBody>
                        {data?.map((item) => (
                            <DivCard
                                resultType={apiKey}
                                key={item.id}
                            /* as={Link} to={`/${apiKey}/${result.name}`} */
                            >
                                <ImgCard resultType={apiKey} src={item.img} alt="" />
                                <div>
                                    <p>{item.name}</p>
                                </div>
                            </DivCard>
                        ))}
                    </DivSliderBody>
                </DivContainerSlider>

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
    )
};

export default HomeSlider;
