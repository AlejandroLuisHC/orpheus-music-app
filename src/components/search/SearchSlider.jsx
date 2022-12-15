import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchKey from '../../api/fetchKey';
import { capitalizeFirstLetter } from '../../helper/utils';
import LogoSpinner from '../general_components/loaders/spinner/LogoSpinner';
import { H2Style } from '../style/generalStyle';
import {
    DivContainerSlider,
    DivCard,
    ImgCard,
    DivSliderBody,
    DivSilderHeader,
} from '../style/searchStyle';

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
                                <DivCard
                                    resultType={apiKey}
                                    key={result.id} /* as={Link} to={`/${apiKey}/${result.name}`} */
                                >
                                    <ImgCard resultType={apiKey} src={result.img} alt="" />
                                    <div>
                                        <p>{result.name}</p>
                                    </div>
                                </DivCard>
                            ))}
                        </DivSliderBody>
                    </DivContainerSlider>
    )
};

export default SearchSlider;
