import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import fetchKey from '../../api/fetchKey';
import LogoSpinner from '../loaders/spinner/LogoSpinner';
import { H2Style } from '../style/generalStyle';
import {
  DivCarrousel,
  DivCarrouselTitle,
  DivResultCard,
  DivSlider,
} from '../style/searchStyle';

const ResultCarrousel = ({ apiKey, search }) => {

  const { data, status } = useQuery([apiKey, apiKey], () => fetchKey(apiKey));

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!search) return setSearchResults([]);

    if (apiKey === 'users') {
      const usersResults = data?.filter(({userData}) => 
        userData.username.toLowerCase().includes(search) ||
        userData.firstName.toLowerCase().includes(search)
      );

      setSearchResults(
        usersResults?.map((result) => ({
          id: result.id,
          name: result.username,
          img: result.avatar,
        }))
      );

    } else {
      const results = data?.filter((item) =>
        item.name.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search)
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
    status === 'loading' ? (
      <LogoSpinner />
    ) : status === 'error' ? (
      <p>Error</p>
    ) : (
      searchResults?.length > 0 && (
        <DivCarrousel>
          <DivCarrouselTitle>
            <H2Style>{apiKey}</H2Style>
            <Link>View more</Link>
          </DivCarrouselTitle>

          <DivSlider>
            {searchResults?.map((result) => (
              <DivResultCard /* as={Link} to={`/${apiKey}/${result.name}`} */ key={result.id}>
                <img src={result.img} alt="" />
                <div>
                  <p>{result.name}</p>
                </div>
              </DivResultCard>
            ))}
          </DivSlider>
        </DivCarrousel>
      )
    )
  );
};

export default ResultCarrousel;
