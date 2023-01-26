import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchKey from '../../api/fetchKey';
import { capitalizeFirstLetter } from '../../helper/utils';
import LogoSpinner from '../general_components/loaders/spinner/LogoSpinner';
import { DivImgRectangleL, H2Style } from '../style/generalStyle';

import {
    DivEventInfo,
    DivInfoMusic,
    DivImageMusic,
    PFollowersUser,
    PTitle,
    ImgAvatarUser,
    ImgCardMusic,
    DivEventCard,
    DivMusicCard,
    DivSilderHeader,
    DivSliderBody,
    DivUserCard,
    PNameUser,
} from '../style/homeStyle';

const SearchSlider = ({ apiKey, search }) => {
    const { getAccessTokenSilently } = useAuth0()
    const { data, status } = useQuery([apiKey, apiKey], async () => {

        const token = await getAccessTokenSilently()
        return await fetchKey(apiKey, token)
    });

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (!search) return setSearchResults([]);

        if (apiKey === 'users') {
            console.log('USER', status, data)

            const usersResults = data?.filter(
                (userData ) =>
                    userData.username.toLowerCase().includes(search.toLowerCase())
                    // userData.firstname.toLowerCase().includes(search.toLowerCase()) WE DONT HAVE ANY USER WITH FIRSTNAME OR LASTNAME
            );

            setSearchResults(
                usersResults?.map((result) => ({
                    id: result._id,
                    name: result.username,
                    img: result.img.url,
                    followers: result.followers.length
                }))
            );
        } else if (apiKey === 'events') {
            console.log('EVENTS', status, data)

            const results = data?.filter(
                (item) =>
                    
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.description?.toLowerCase().includes(search.toLowerCase()) 
            );

            setSearchResults(
                results?.map((result) => ({
                    id: result._id,
                    name: result.name,
                    img: result.img.url,
                    location: result.location,
                    date: result.date,
                    price: result.price
                }))
            );
        } else if(apiKey === 'playlists'){
            console.log('PLAYLISTS', status, data)
            const results = data?.filter(
                (item) =>
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.description?.toLowerCase().includes(search.toLowerCase())
            );

            setSearchResults(
                results?.map((result) => ({
                    id: result._id,
                    name: result.name,
                    img: result.img.url,
                    description: result.description,
                }))
            );
        } else if(apiKey === 'albums'){
            console.log('ALABUM', status, data)
            const results = data?.filter(
                (item) =>
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.description?.toLowerCase().includes(search.toLowerCase())
            );

            setSearchResults(
                results?.map((result) => ({
                    id: result._id,
                    name: result.name,
                    img: result.img.url,
                    description: result.description,
                }))
            );
        } else if(apiKey === 'tracks'){
            console.log('TRACKS', status)

            const {tracks} = data
            const results = tracks?.filter(
                (item) =>
                    item.name.toLowerCase().includes(search.toLowerCase()) ||
                    item.description?.toLowerCase().includes(search.toLowerCase())
            );

            setSearchResults(
                results?.map((result) => ({
                    id: result._id,
                    name: result.name,
                    img: result.img.url,
                    description: result.description,
                }))
            );
        }
    }, [search, data]);

    return (
        status === 'loading'
            ? <LogoSpinner />
            : status === 'error'
                ? <Error />
                : searchResults?.length > 0 &&
                <>
                    <DivSilderHeader>
                        <H2Style>{capitalizeFirstLetter(apiKey)}</H2Style>
                        <Link>View more</Link>
                    </DivSilderHeader>

                    <DivSliderBody>
                        {searchResults?.map((result) => (
                            apiKey === 'events' ? (
                                <DivEventCard key={result.id}>
                                    <DivImgRectangleL src={result.img} />
                                    <DivEventInfo>
                                        <div>
                                            <PTitle>{result.name}</PTitle>
                                            <PTitle>{result.location} - {result.date}</PTitle>
                                        </div>
                                        <H2Style>{result.price}€</H2Style>
                                    </DivEventInfo>
                                </DivEventCard>

                            ) : apiKey === 'users' ? (
                                <DivUserCard key={result.id}>
                                    <ImgAvatarUser src={result.img} />
                                    <PNameUser>{result.name}</PNameUser>
                                    <PFollowersUser>{result.followers} followers</PFollowersUser>
                                </DivUserCard>

                            ) : (
                                <DivMusicCard
                                    resultType={apiKey}
                                    key={result.id}
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
                                        <ImgCardMusic src={result.img} />
                                    </DivImageMusic>
                                    <DivInfoMusic>
                                        <PTitle>{result.name}</PTitle>
                                        <PTitle>{result.description}</PTitle>
                                    </DivInfoMusic>
                                </DivMusicCard>
                            )
                        ))}
                    </DivSliderBody>
                </>
    )
};

export default SearchSlider;
