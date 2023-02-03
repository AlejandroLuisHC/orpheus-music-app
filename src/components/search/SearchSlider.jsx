import { useAuth0 } from '@auth0/auth0-react';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import fetchKey from '../../api/fetchKey';
import { capitalizeFirstLetter } from '../../helper/utils';
import HomeSlidersLoader from '../general_components/loaders/content_loader/HomeSlidersLoader';
import { DivImgRectangleL, DivInfoMusicBottom, H2Style } from '../style/generalStyle';

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
    LinkViewMore,
    PDescription,
} from '../style/homeStyle';

const SearchSlider = ({ apiKey, search }) => {
    const navigate = useNavigate();
    const { getAccessTokenSilently } = useAuth0()
    const { data, status } = useQuery([apiKey, apiKey], async () => {
        const token = await getAccessTokenSilently()
        return await fetchKey(apiKey, token)
    });

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (!search) return setSearchResults([]);

        if (apiKey === 'users') {

            const usersResults = data?.filter(
                (userData) =>
                    userData.username.toLowerCase().includes(search.toLowerCase())
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
        } else if (apiKey === 'playlists') {

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
                    ownership: {
                        username: result.ownership.username
                    }
                }))
            );
        } else if (apiKey === 'albums') {

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
                    ownership: {
                        username: result.ownership.username
                    }
                }))
            );
        } else if (apiKey === 'tracks') {

            const tracks = data?.tracks
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
                    ownership: {
                        username: result.ownership.username
                    }
                }))
            );
        }
    }, [search, data]);

    return (
        status === 'loading'
            ? <HomeSlidersLoader />
            : status === 'error'
                ? <Error />
                : searchResults?.length > 0 &&
                <>
                    <DivSilderHeader>
                        <H2Style onClick={() => navigate(`/${apiKey}`)}>{capitalizeFirstLetter(apiKey)}</H2Style>
                        <LinkViewMore to={`../${apiKey}`}>View more</LinkViewMore>
                    </DivSilderHeader>

                    <DivSliderBody>
                        {searchResults?.map((result) => (
                            apiKey === 'events' ? (
                                <DivEventCard key={result.id}
                                    onClick={() => navigate(`/event/${result.id}`)}
                                >
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
                                <DivUserCard key={result.id}
                                    onClick={() => navigate(`/profile/${result.id}`)}
                                >
                                    <ImgAvatarUser src={result.img} />
                                    <PNameUser>{result.name}</PNameUser>
                                    <PFollowersUser>{result.followers} followers</PFollowersUser>
                                </DivUserCard>

                            ) : apiKey === 'tracks' ? (
                                <DivMusicCard key={result.id}
                                    resultType={apiKey}
                                >
                                    <DivImageMusic>
                                        <ImgCardMusic
                                            src={result.img}
                                            onClick={() => navigate(`/track/${result.id}`)}
                                        />
                                    </DivImageMusic>
                                    <DivInfoMusic>
                                        <PTitle>{result.name}</PTitle>
                                        <DivInfoMusicBottom>
                                            <PDescription>{result.ownership.username}</PDescription>
                                            <BtnAddToFavTracks trackId={result.id} />
                                            <BtnModalTrackOptions trackId={result.id} />
                                        </DivInfoMusicBottom>
                                    </DivInfoMusic>
                                </DivMusicCard>
                            ) : apiKey === 'playlists' ? (
                                <DivMusicCard key={result.id}
                                    onClick={() => navigate(`/playlist/${result.id}`)}
                                    resultType={apiKey}
                                >
                                    <DivImageMusic>
                                        <ImgCardMusic src={result.img} />
                                    </DivImageMusic>
                                    <DivInfoMusic>
                                        <PTitle>{result.name}</PTitle>
                                        <PDescription>{result?.ownership?.username}</PDescription>
                                    </DivInfoMusic>
                                </DivMusicCard>
                            ) : (
                                <DivMusicCard key={result.id}
                                    onClick={() => navigate(`/album/${result.id}`)}
                                    resultType={apiKey}
                                >
                                    <DivImageMusic>
                                        <ImgCardMusic src={result.img} />
                                    </DivImageMusic>
                                    <DivInfoMusic>
                                        <PTitle>{result.name}</PTitle>
                                        <PDescription>{result?.ownership?.username}</PDescription>
                                    </DivInfoMusic>
                                </DivMusicCard>
                            )
                        ))}
                    </DivSliderBody>
                </>
    )
};

export default SearchSlider;
