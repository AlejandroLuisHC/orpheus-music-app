import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchKey from '../../api/fetchKey';
import { capitalizeFirstLetter } from '../../helper/utils';
import LogoSpinner from '../general_components/loaders/spinner/LogoSpinner';
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

const SearchSlider = ({ apiKey, search }) => {
    const { data, status } = useQuery([apiKey, apiKey], () => fetchKey(apiKey));

    const [searchResults, setSearchResults] = useState([]);
    console.log(apiKey, searchResults);

    useEffect(() => {
        if (!search) return setSearchResults([]);

        if (apiKey === 'users') {
            const usersResults = data?.filter(
                ({ userData }) =>
                    userData.username.toLowerCase().includes(search.toLowerCase()) ||
                    userData.firstName.toLowerCase().includes(search.toLowerCase())
            );

            setSearchResults(
                usersResults?.map((result) => ({
                    id: result.id,
                    name: result.userData.username,
                    img: result.userData.avatar,
                    followers: result.followers.length
                }))
            );
        } else if (apiKey === 'events') {
            const results = data?.filter(
                (item) =>
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.description.toLowerCase().includes(search.toLowerCase())
            );

            setSearchResults(
                results?.map((result) => ({
                    id: result.id,
                    name: result.name,
                    img: result.img,
                    location: result.location,
                    date: result.date,
                    price: result.price
                }))
            );
        } else {
            const results = data?.filter(
                (item) =>
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.description.toLowerCase().includes(search.toLowerCase())
            );

            setSearchResults(
                results?.map((result) => ({
                    id: result.id,
                    name: result.name,
                    img: result.img,
                    description: result.description,
                }))
            );
        }
    }, [search, data]);

    return (
        status === 'loading' 
            ? <LogoSpinner />
            : status === 'error' 
                ? <p>Error</p>
                : searchResults?.length > 0 && 
                    <DivContainerSlider>
                        <DivSilderHeader>
                            <H2Style>{capitalizeFirstLetter(apiKey)}</H2Style>
                            <Link>View more</Link>
                        </DivSilderHeader>

                        <DivSliderBody>
                            {searchResults?.map((result) => (
                                apiKey === 'events' ? (
                                    <DivEventCard key={result.id}>
                                        <DivImgRectangleL src={result.img} />
                                        <DivFlex>
                                            <div>
                                                <H6StyleHero>{result.name}</H6StyleHero>
                                                <PStyleHero>{result.location} - {result.date}</PStyleHero>
                                            </div>
                                            <H2Style>{result.price}€</H2Style>
                                        </DivFlex>
                                    </DivEventCard>
            
                                ) : apiKey === 'users' ? (
                                    <DivUserCard key={result.id}>
                                        <ImgAvatarUser src={result.img} />
                                        <H3NameUser>{result.name}</H3NameUser>
                                        <H4NameUser>{result.followers} followers</H4NameUser>
                                    </DivUserCard>
            
                                ) : (
                                    <DivMusicCard
                                        resultType={apiKey}
                                        key={result.id}
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
                                            <ImgCards src={result.img} />
                                        </DivPicLists>
                                        <DivInfoLists>
                                            <H6StyleHero>{result.name}</H6StyleHero>
                                            <PStyleHero>{result.description}</PStyleHero>
                                        </DivInfoLists>
                                    </DivMusicCard>
                                )
                            ))}
                        </DivSliderBody>
                    </DivContainerSlider>
    )
};

export default SearchSlider;
