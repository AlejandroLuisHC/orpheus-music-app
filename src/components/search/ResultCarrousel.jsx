import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchKey from '../../api/fetchKey';
import LogoSpinner from '../general_components/loaders/spinner/LogoSpinner';
import { H2Style } from '../style/generalStyle';
import {
  DivCarrousel,
  DivCarrouselTitle,
  DivCard,
  DivSlider,
  ImgCard,
} from '../style/searchStyle';

const ResultCarrousel = ({ apiKey, search }) => {
  const { data, status } = useQuery([apiKey, apiKey], () => fetchKey(apiKey));
  const [searchResults, setSearchResults] = useState([]);
  console.log(apiKey, searchResults)

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
          name: result.userData.username,
          img: result.userData.avatar,
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
              <DivCard resultType={apiKey} /* as={Link} to={`/${apiKey}/${result.name}`} */ key={result.id}>
                <ImgCard resultType={apiKey} src={result.img} alt="" />
                <div>
                  <p>{result.name}</p>
                </div>
              </DivCard>
            ))}
          </DivSlider>
        </DivCarrousel>
      )
    )
  );
};

export default ResultCarrousel;
