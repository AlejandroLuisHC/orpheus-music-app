import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import fetchKey from '../api/fetchKey';
import ResultTypeCarrousel from '../components/search/ResultTypeCarrousel';
import { FormStyle, InputStyle } from '../components/style/generalStyle';
import {
  DivSearchResults,
  MainFlexContainer,
} from '../components/style/searchStyle';

const Search = () => {
  // const { data: playlists } = useQuery(['playlists', 'playlists'], () =>
  //   fetchKey('playlists')
  // );

  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  // const [searchResults, setSearchResults] = useState([]);
  // console.log('searchResults', searchResults);

  // const search = watch('search', '').toLowerCase();

  // useEffect(() => {
  //   if (!search) return setSearchResults([]);
  //   fetchKey('playlists');
  //   // let cancel = false;
  //   // if (cancel) return;

  //   const results = playlists?.filter(
  //     (playlist) =>
  //       playlist.name.toLowerCase().includes(search) ||
  //       playlist.description.toLowerCase().includes(search)
  //   );

  //   setSearchResults(
  //     results.map((result) => ({
  //       id: result.id,
  //       name: result.name,
  //       img: result.img,
  //     }))
  //   );

  //   // return () => cancel = true;
  // }, [search]);

  return (
    <MainFlexContainer>
      <FormStyle>
        <InputStyle
          type="search"
          placeholder="Users, songs, playlists, events, genres or moods"
          {...register('search')}
        ></InputStyle>
      </FormStyle>

      <DivSearchResults>
        <ResultTypeCarrousel apiKey={'playlists'} watch={watch} />
        <ResultTypeCarrousel apiKey={'tracks'} watch={watch} />

        {/* {searchResults?.map((result) => (
          <DivResultCard key={result.id}>
            <img src={result.img} alt="" />
            <div>
              <p>{result.name}</p>
            </div>
          </DivResultCard>
        ))} */}
      </DivSearchResults>
    </MainFlexContainer>
  );
};

export default Search;
