import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import fetchKey from '../api/fetchKey';
import { FormStyle, InputStyle } from '../components/style/generalStyle';
import {
  DivSearchResults,
  MainFlexContainer,
} from '../components/style/searchStyle';

const Search = () => {
  const { data: playlists } = useQuery(['playlists', 'playlists'], () =>
    fetchKey('playlists')
  );

  const {
    register,
    watch,
    formState: { errors },
  } = useForm();

  const [searchResults, setSearchResults] = useState([]);
  console.log('searchResults', searchResults);

  const search = watch('search', '').toLowerCase();
  console.log(search)

  useEffect(() => {
    if (!search) return setSearchResults([]);
    fetchKey('playlists');
    // let cancel = false;
    // if (cancel) return;

    setSearchResults(playlists.map((playlist) => {
      if (playlist.name.toLowerCase().includes(search) || playlist.description.toLowerCase().includes(search)) {
        return {
          name: playlist.name,
          img: playlist.img
        };
      }
    }));

    // return () => cancel = true;
  }, [search]);

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
        {search === 'pop' && 'pop related results'}
        {searchResults?.map((result) => result?.name)}
      </DivSearchResults>
    </MainFlexContainer>
  );
};

export default Search;
