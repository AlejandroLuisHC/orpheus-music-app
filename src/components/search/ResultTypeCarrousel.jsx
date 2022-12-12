import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import fetchKey from '../../api/fetchKey';
import { H2Style } from '../style/generalStyle';
import {
    DivCarrousel,
  DivCarrouselTitle,
  DivResultCard,
  DivSlider,
} from '../style/searchStyle';

const ResultTypeCarrousel = ({ apiKey, watch }) => {
  const { data, status } = useQuery([apiKey, apiKey], () => fetchKey(apiKey));
  console.log(`${apiKey} =`, data);

  const [searchResults, setSearchResults] = useState([]);
  console.log('searchResults', searchResults);

  const search = watch('search', '').toLowerCase();

  useEffect(() => {
    if (!search) return setSearchResults([]);
    fetchKey(apiKey);
    console.log(data);

    const results = data?.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.description.toLowerCase().includes(search)
    );

    setSearchResults(
      results.map((result) => ({
        id: result.id,
        name: result.name,
        img: result.img,
      }))
    );
  }, [search]);

  return status === 'loading' ? (
    // <HomeSlidersLoader />
    <p>Loader</p>
  ) : status === 'error' ? (
    <p>Error</p>
  ) : (
    searchResults.length > 0 &&
    <DivCarrousel>
      <DivCarrouselTitle>
        <H2Style>{apiKey}</H2Style>
        <Link>View more</Link>
      </DivCarrouselTitle>

      <DivSlider>
        {searchResults?.map((result) => (
          <DivResultCard key={result.id}>
            <img src={result.img} alt="" />
            <div>
              <p>{result.name}</p>
              <p>{result.description}</p>
            </div>
          </DivResultCard>
        ))}
        {/* {data?.map((album) => {
          return (
            <DivCard key={album.id}>
                <img src={result.img} alt="" />
                <DivInfoLists>
                    <H6StyleHero>{album.name}</H6StyleHero>
                    <PStyleHero>{album.description}</PStyleHero>
                </DivInfoLists>
            </DivCard>
          );
        })} */}
      </DivSlider>
    </DivCarrousel>
  );
};

export default ResultTypeCarrousel;
